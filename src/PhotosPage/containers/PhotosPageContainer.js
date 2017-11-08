// libraries
import React, { Component } from 'react';
import AWS from 'aws-sdk';
import { config } from '../../config';

// components
// import PhotosCollection from '../components/PhotosCollection';

export default class PhotosPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      lightboxIsOpen: false,
      currentImage: 0
    };
  }

  componentDidMount() {
    const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
    const Bucket = config.S3_BUCKET;

    const params = {
      Bucket,
      Prefix: 'engagement'
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
      console.log(imgArray);
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

  render() {
    return <h1>Hello world</h1>;
  }
}
