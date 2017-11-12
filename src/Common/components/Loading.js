import React from 'react';
import PropTypes from 'prop-types';

import ReactLoading from 'react-loading';

import '../styles/Loading.css';

const LoadingBar = ({
  className = 'loading',
  color = '#444',
  type = 'bars'
}) => {
  const props = { className, type, color };
  return <ReactLoading {...props} />;
};

LoadingBar.PropTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string
};

export default LoadingBar;
