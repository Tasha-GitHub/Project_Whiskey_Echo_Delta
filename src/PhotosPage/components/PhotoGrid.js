import React from 'react';
import PropTypes from 'prop-types';

import Masonry from 'react-masonry-component';

const PhotoGrid = ({ photos }) => {
  return (
    <div className="photo-grid">
      <Masonry
        className={'my-gallery-class'} // default ''
        elementType={'ul'} // default 'div'
        options={{
          transitionDuration: 0
        }} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      >
        {photos}
      </Masonry>
    </div>
  );
};

PhotoGrid.propTypes = {
  photos: PropTypes.array.isRequired
};

export default PhotoGrid;
