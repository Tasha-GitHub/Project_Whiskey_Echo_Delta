import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import '../styles/PhotoCollectionPanel.css';

const PhotoCollectionPanel = ({
  content,
  index,
  actions,
  classExtension,
  activePanel,
  history
}) => {
  const { topText, middleText, bottomText, category } = content;
  const { handleMouseEnter, handleMouseLeave, handleTransitionEnd } = actions;
  const baseClass = `panel panel${index + 1}`;
  const isActivePanel = category === activePanel;
  const className = isActivePanel
    ? baseClass + ` ${classExtension}`
    : baseClass;

  return (
    <div
      onMouseEnter={() => handleMouseEnter(category)}
      onMouseLeave={handleMouseLeave}
      onTransitionEnd={handleTransitionEnd}
      onClick={() => history.push(`/photos/${category}`)}
      className={className}
    >
      <p>{topText}</p>
      <p>{middleText}</p>
      <p>{bottomText}</p>
    </div>
  );
};

PhotoCollectionPanel.propTypes = {
  content: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default withRouter(PhotoCollectionPanel);
