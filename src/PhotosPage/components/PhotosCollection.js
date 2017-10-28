import React from 'react';
import PropTypes from 'prop-types';

import Photo from './Photo';

import '../styles/PhotoCollection.css';

const PhotosCollection = ({ photos }) => {
  return (
    <ul className="gallery">
      {photos.map((photo, i) => <Photo key={i} photoData={photo} />)}
    </ul>
  );
};

PhotosCollection.propTypes = {
  photos: PropTypes.array.isRequired
};

export default PhotosCollection;
