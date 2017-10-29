import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/Photo.css';

class Photo extends Component {
  constructor(props) {
    super(props);
    this.baseClassName = `polaroid-photo z-${this.props.photoIndex + 1}`;
    this.myRotationClass = this.baseClassName;
    this.state = {
      photoClass: this.baseClassName,
      isActivePhoto: false
    };
  }

  componentWillMount() {
    this.getClass();
  }

  componentWillReceiveProps(nextProps) {
    let isActivePhoto = false;
    let photoClass = this.myRotationClass;
    if (nextProps.activePhoto === this.props.photoData.id) {
      photoClass = this.baseClassName + ' active';
      isActivePhoto = true;
    }
    this.setState({ photoClass, isActivePhoto });
  }

  randRotation() {
    return Math.round(Math.random() * 90 - 45);
  }

  getClass() {
    let photoClass = this.baseClassName;
    const randomNumber = this.randRotation();
    const positiveRotation = `${photoClass} polaroid-angle-${randomNumber}`;
    const negativeRotation = `${photoClass} polaroid-angle-neg${randomNumber}`;
    if (randomNumber === 0) {
      this.myRotationClass = this.baseClassName;
      this.setState({ baseClassName: this.baseClassName });
    }

    photoClass = randomNumber > 0 ? positiveRotation : negativeRotation;
    this.myRotationClass = photoClass;
    this.setState({ photoClass });
  }

  handleClick() {
    const {
      activePhoto,
      handleActivePhoto,
      photoData,
      moveActivePhotoTo
    } = this.props;
    const { isActivePhoto } = this.state;

    if (isActivePhoto) {
      // if active photo is clicked again send it back to the top
      handleActivePhoto(0);
      moveActivePhotoTo('top');
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
