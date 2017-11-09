// libraries
import React, { Component } from 'react';
import AWS from 'aws-sdk';
import Lightbox from 'react-images';

import { config } from '../../config';

import PhotoGrid from '../components/PhotoGrid';

export default class PhotosGridContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      lightboxIsOpen: false,
      currentImage: 0
    };
  }

  componentDidMount() {
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
      self.setState({
        photos: imgArray.map(img => {
          return { src: img };
        })
      });
    });
  }

  openLightbox(index, event) {
    event.preventDefault();
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

    this.gotoNext();
  }

  renderImageGrid(photos) {
    const gridElements = photos.map(photo => {
      return (
        <li className="image-element-class">
          <img src={photo.src} />
        </li>
      );
    });
    return <h1>I need to make these thumbnails....</h1>;
    // return <PhotoGrid photos={gridElements} />;
  }

  render() {
    const { photos, lightboxIsOpen } = this.state;
    if (!photos.length) return null;
    return (
      <div>
        {this.renderImageGrid(photos)}
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
