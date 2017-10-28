import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Photo.css';

const Photo = ({ photoData }) => {
  const { title, url } = photoData;
  return (
    <li className="polaroid-photo">
      <img src={url} />
      <p>{title}</p>
    </li>
  );
};

Photo.propTypes = {
  photoData: PropTypes.object.isRequired
};

export default Photo;
