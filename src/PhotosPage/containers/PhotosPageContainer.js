// libraries
import React, { Component } from 'react';

// components
import PhotosCollection from '../components/PhotosCollection';

const photos = [
  // mock photos
  {
    id: 1,
    title: 'test',
    url: 'http://placeimg.com/640/480/any/1'
  },
  {
    id: 2,
    title: 'test',
    url: 'http://placeimg.com/640/480/any/2'
  },
  {
    id: 3,
    title: 'test',
    url: 'http://placeimg.com/640/480/any/3'
  },
  {
    id: 4,
    title: 'test',
    url: 'http://placeimg.com/640/480/any/4'
  },
  {
    id: 5,
    title: 'test',
    url: 'http://placeimg.com/640/480/any/5'
  }
];

export default class PhotosPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      activePhoto: 0
    };
  }

  componentDidMount() {
    this.setState({ photos }); // yes this is bad, it's just for now w/ the dummy data
    // fetch img urls from s3 bucket
  }

  handleActivePhoto(photoIndex) {
    this.setState({ activePhoto: photoIndex });
  }

  moveActivePhotoTo(position = 'bottom') {
    const { activePhoto, photos } = this.state;
    const currentActivePhoto = photos.find(photo => photo.id === activePhoto);
    const filteredPhotos = photos.filter(photo => photo.id !== activePhoto);
    let newPhotosOrder = [currentActivePhoto, ...filteredPhotos];
    if (position === 'top') {
      newPhotosOrder = [...filteredPhotos, currentActivePhoto];
    }
    this.setState({ photos: newPhotosOrder });
  }

  render() {
    const { photos, activePhoto } = this.state;
    return (
      <div className="photos-page-container">
        <PhotosCollection
          photos={photos}
          activePhoto={activePhoto}
          handleActivePhoto={this.handleActivePhoto.bind(this)}
          moveActivePhotoTo={this.moveActivePhotoTo.bind(this)}
        />
      </div>
    );
  }
}
