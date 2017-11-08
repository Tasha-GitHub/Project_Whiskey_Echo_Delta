import React from 'react';
import PropTypes from 'prop-types';

import { Lightbox, Gallery } from 'react-images';

const PhotosCollection = ({
  currentImage,
  photos,
  lightboxIsOpen,
  gotoPrevLightboxImage,
  gotoNextLightboxImage,
  closeLightbox
}) => {
  return (
    <div className="photo-grid">
      <Lightbox
        images={photos}
        currentImage={currentImage}
        isOpen={true}
        onClickPrev={gotoPrevLightboxImage}
        onClickNext={gotoNextLightboxImage}
        onClose={closeLightbox}
      />
    </div>
  );
};

PhotosCollection.propTypes = {
  photos: PropTypes.array.isRequired,
  currentImage: PropTypes.number,
  handleActivePhoto: PropTypes.func.isRequired,
  moveActivePhotoTo: PropTypes.func.isRequired
};

export default PhotosCollection;
