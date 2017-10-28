// libraries
import React, { Component } from 'react';

// components
import PhotosCollection from '../components/PhotosCollection';

const photos = [
  // mock photos
  {
    title: 'test',
    url: 'http://placeimg.com/640/480/any/1'
  },
  {
    title: 'test',
    url: 'http://placeimg.com/640/480/any/2'
  },
  {
    title: 'test',
    url: 'http://placeimg.com/640/480/any/3'
  },
  {
    title: 'test',
    url: 'http://placeimg.com/640/480/any/4'
  },
  {
    title: 'test',
    url: 'http://placeimg.com/640/480/any/5'
  }
];

export default class PhotosPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    this.setState({ photos }); // yes this is bad, it's just for now w/ the dummy data
    // fetch img urls from s3 bucket
  }

  render() {
    return (
      <div className="photos-page-container">
        <PhotosCollection photos={this.state.photos} />
      </div>
    );
  }
}
