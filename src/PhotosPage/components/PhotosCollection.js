import React from 'react';
import PropTypes from 'prop-types';

import Photo from './Photo';

import '../styles/PhotoCollection.css';

const PhotosCollection = ({
  activePhoto,
  handleActivePhoto,
  photos,
  moveActivePhotoTo
}) => {
  return (
    <ul className="gallery">
      {photos.map((photo, i) => (
        <Photo
          key={i}
          photoIndex={i}
          collectionSize={photos.length}
          photoData={photo}
          activePhoto={activePhoto}
          handleActivePhoto={handleActivePhoto}
          moveActivePhotoTo={moveActivePhotoTo}
        />
      ))}
    </ul>
  );
};

PhotosCollection.propTypes = {
  photos: PropTypes.array.isRequired,
  activePhoto: PropTypes.number,
  handleActivePhoto: PropTypes.func.isRequired,
  moveActivePhotoTo: PropTypes.func.isRequired
};

export default PhotosCollection;
