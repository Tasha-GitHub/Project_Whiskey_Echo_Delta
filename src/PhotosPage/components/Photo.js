import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/Photo.css';

class Photo extends Component {
  constructor(props) {
    super(props);
    this.myRotation = Math.round(Math.random() * 90 - 45);
    this.baseClassName = this.getBaseClass(this.myRotation);
    this.state = {
      photoClass: this.baseClassName,
      isActivePhoto: false
    };
  }

  componentWillMount() {
    this.updateClass();
  }

  componentWillReceiveProps(nextProps) {
    const isActivePhoto = nextProps.activePhoto === this.props.photoData.id;
    this.updateClass(isActivePhoto);
    this.setState({ isActivePhoto });
  }

  getBaseClass(myRotation) {
    const photoClass = 'polaroid-photo';
    const positiveRotation = `${photoClass} polaroid-angle-${myRotation}`;
    const negativeRotation = `${photoClass} polaroid-angle-neg${myRotation}`;
    return myRotation >= 0 ? positiveRotation : negativeRotation;
  }

  updateClass(isActivePhoto = false) {
    let photoClass = `${this.baseClassName} z-${this.props.photoIndex + 1}`;
    if (isActivePhoto) {
      photoClass = 'polaroid-photo active';
    }
    this.setState({ photoClass });
  }

  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('clicked ', this.props.photoIndex);

    const {
      activePhoto,
      handleActivePhoto,
      photoData,
      moveActivePhotoTo
    } = this.props;
    const { isActivePhoto } = this.state;

    if (isActivePhoto) {
      // if active photo is clicked again send it back to the top
      moveActivePhotoTo('top');
      handleActivePhoto(0);
    } else {
      // if inactive photo clicked, check to see if we have an active photo
      // if we do, send active photo to bottom and make this one activePhoto
      // else just make this one active
      if (activePhoto) {
        moveActivePhotoTo('bottom');
      }
      handleActivePhoto(photoData.id);
    }
  }

  render() {
    const { title, url } = this.props.photoData;
    const { photoClass } = this.state;
    return (
      <li onClick={this.handleClick.bind(this)} className={photoClass}>
        <img src={url} />
        <p>{title}</p>
      </li>
    );
  }
}

Photo.propTypes = {
  photoData: PropTypes.object.isRequired,
  photoIndex: PropTypes.number.isRequired,
  collectionSize: PropTypes.number.isRequired,
  activePhoto: PropTypes.number,
  handleActivePhoto: PropTypes.func.isRequired,
  moveActivePhotoTo: PropTypes.func.isRequired
};

export default Photo;
