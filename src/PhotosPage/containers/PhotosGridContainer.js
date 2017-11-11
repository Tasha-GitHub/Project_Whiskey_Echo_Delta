// libraries
import React, { Component } from 'react';
import AWS from 'aws-sdk';
import Lightbox from 'react-images';
import sizeMe from 'react-sizeme';
import StackGrid from 'react-stack-grid';
import ReactLoading from 'react-loading';

import { config } from '../../config';

import PhotoGrid from '../components/PhotoGrid';
import '../styles/PhotosGridContainer.css';

class PhotosGridContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      photoSet: [],
      loading: false,
      lightboxIsOpen: false,
      currentImage: 0
    };
  }

  componentWillMount() {
    this.setState({
      loading: true
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const self = this;
    const { albumType } = this.props.match.params;
    const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
    const Bucket = config.S3_BUCKET;

    const params = {
      Bucket,
      Prefix: albumType
    };

    s3.listObjectsV2(params, (err, data) => {
      const bucketContents = data.Contents;
      const imgArray = bucketContents.map((item, i) => {
        const urlParams = {
          Bucket,
          Key: bucketContents[i].Key
        };
        return s3.getSignedUrl('getObject', urlParams);
      });
      const photoURLs = imgArray.splice(1).map(img => {
        // 1st index is causing an issue, investigate later
        return { src: img };
      });
      self.setState({
        photos: photoURLs
      });
      self.renderImageGrid(photoURLs);
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const windowHeight =
      'innerHeight' in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      alert('bottom');
    }
  }

  openLightbox(index, event) {
    event.preventDefault(); // promise.all may resolve these out of order so index could be misleading......
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    });
  }

  gotoPrevLightboxImage() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }

  gotoNextLightboxImage() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }

  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNextLightboxImage();
  }

  getImage(url, i) {
    return new Promise(function(resolve, reject) {
      var img = new Image();
      img.onload = function() {
        resolve(url);
      };
      img.onerror = function() {
        resolve(url); // index 0 is breaking, double check that then change this back to reject
      };
      img.src = url;
    });
  }

  renderImageGrid(photos) {
    const self = this;
    const allPromises = [];
    const gridElements = photos.map((photo, i) => {
      allPromises.push(self.getImage(photo.src, i));
    });

    Promise.all(allPromises)
      .then(allURLs => {
        const gridItems = allURLs.map((url, i) => {
          return (
            <div key={i}>
              <img src={url} />
            </div>
          );
        });
        self.setState({
          photoSet: gridItems,
          loading: false
        });
      })
      .catch(e => {
        self.setState({
          loading: false
        });
      });
  }

  render() {
    const { photos, lightboxIsOpen, photoSet, loading } = this.state;
    if (!photos.length) return null;
    return (
      <div className="gallery-grid-container">
        {loading && (
          <ReactLoading className="loading" type="bars" color="#444" />
        )}
        <StackGrid
          className="gallery-grid"
          columnWidth={this.props.width <= 768 ? '100%' : '33.33%'}
        >
          {photoSet.length ? this.state.photoSet : null}
        </StackGrid>
        <Lightbox
          images={photos}
          isOpen={lightboxIsOpen}
          onClickPrev={this.gotoPrevLightboxImage.bind(this)}
          onClickNext={this.gotoNextLightboxImage.bind(this)}
          onClose={this.closeLightbox.bind(this)}
        />
      </div>
    );
  }
}

export default sizeMe()(PhotosGridContainer);
