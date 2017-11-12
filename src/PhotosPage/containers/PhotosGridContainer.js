// libraries
import React, { Component } from 'react';
import AWS from 'aws-sdk';
import Lightbox from 'react-images';

import { config } from '../../config';

import PhotoGrid from '../components/PhotoGrid';
import LoadingBar from '../../Common/components/Loading';

import '../styles/PhotosGridContainer.css';

export default class PhotosGridContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      loading: false,
      lightboxIsOpen: false,
      currentImage: 0
    };
  }

  componentWillMount() {
    this.setState({ loading: true });
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
      // 1st index is causing an issue, investigate later
      const photoURLs = imgArray.splice(1).map(img => {
        return { src: img };
      });
      self.setState({
        photos: photoURLs
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

    this.gotoNextLightboxImage();
  }

  updateLoadingStatus(bool) {
    this.setState({ loading: bool });
  }

  updatePhotos(photos) {
    this.setState({ photos });
  }

  render() {
    const { photos, lightboxIsOpen, loading } = this.state;
    return (
      <div className="gallery-grid-container">
        {loading && <LoadingBar />}
        <PhotoGrid
          loadingCallback={this.updateLoadingStatus.bind(this)}
          updatePhotos={this.updatePhotos.bind(this)}
          onImgClick={this.openLightbox.bind(this)}
          photos={photos}
        />
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
