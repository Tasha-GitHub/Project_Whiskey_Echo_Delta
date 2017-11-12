import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/PhotoGrid.css';

export default class PhotoGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridElements: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.photos.toString() !== this.props.photos.toString()) {
      this.renderImageGrid(nextProps.photos);
    }
  }

  imagesLoaded(gridElements, allURLs) {
    const { loadingCallback, updatePhotos } = this.props;
    this.setState({ gridElements });
    loadingCallback(false);
    // Ok so Im doing this in the chance that the Promise.all execution causes the
    // order of items to change in case some image sources resolve faster than others.
    // Because in that case the indexes would mismatch...
    updatePhotos(
      allURLs.map(url => {
        return { src: url };
      })
    );
  }

  getImage(url, i) {
    return new Promise(function(resolve, reject) {
      var img = new Image();
      img.onload = function() {
        resolve(url);
      };
      img.onerror = function() {
        reject(url);
      };
      img.src = url;
    });
  }

  renderImageGrid(photos) {
    const self = this;
    const { onImgClick } = this.props;
    const allPromises = [];
    const gridElements = photos.map((photo, i) => {
      allPromises.push(self.getImage(photo.src, i));
    });

    Promise.all(allPromises)
      .then(allURLs => {
        const gridElements = allURLs.map((url, i) => {
          return (
            <div
              className="col-xs-12 col-sm-4 grid-item"
              onClick={e => onImgClick(i, e)}
              key={i}
            >
              <img src={url} />
            </div>
          );
        });
        self.imagesLoaded(gridElements, allURLs);
      })
      .catch(e => {
        // really eventually load an oops something went wrong modal here
        debugger;
      });
  }
  render() {
    const { loadingCallback, photos } = this.props;
    const { gridElements } = this.state;
    return (
      <div className="gallery-grid">
        {!!gridElements.length && gridElements}
      </div>
    );
  }
}

PhotoGrid.propTypes = {
  photos: PropTypes.array.isRequired
};
