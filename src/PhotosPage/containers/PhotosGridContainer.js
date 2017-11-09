// libraries
import React, { Component } from 'react';

export default class PhotosGridContainer extends Component {
  render() {
    console.log(this.props.match.params.type);
    return <div className="photos-page-container">blah</div>;
  }
}
