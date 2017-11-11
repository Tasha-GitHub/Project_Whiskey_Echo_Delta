// libraries
import React, { Component } from 'react';

// components
import PhotoCollectionPanel from '../components/PhotoCollectionPanel';

import '../styles/PhotosPageContainer.css';

const photoCategoryData = [
  {
    category: 'engagement',
    topText: 'Rob&Tasha',
    middleText: 'Engaged',
    bottomText: '10/15/17'
  },
  {
    category: 'wedding',
    topText: 'Rob&Tasha',
    middleText: 'Wedding',
    bottomText: 'xx/xx/2019'
  },
  {
    category: 'honeymoon',
    topText: 'Rob&Tasha',
    middleText: 'Honeymoon',
    bottomText: 'xx/xx/2019'
  }
];

export default class PhotosPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classExtension: '',
      activePanel: ''
    };
  }

  handleMouseEnter(category) {
    this.setState({
      classExtension: 'open',
      activePanel: category
    });
  }

  handleMouseLeave() {
    this.setState({
      classExtension: ''
    });
  }

  handleTransitionEnd(e) {
    const { classExtension } = this.state;
    if (classExtension.includes('open') && e.propertyName.includes('flex')) {
      this.setState({
        classExtension: 'open open-active'
      });
    }
  }

  render() {
    const actions = {
      handleMouseEnter: this.handleMouseEnter.bind(this),
      handleMouseLeave: this.handleMouseLeave.bind(this),
      handleTransitionEnd: this.handleTransitionEnd.bind(this)
    };
    const { classExtension, activePanel } = this.state;
    return (
      <div className="panels">
        {photoCategoryData.map((data, i) => {
          const props = {
            actions,
            content: data,
            index: i,
            classExtension,
            activePanel
          };
          return <PhotoCollectionPanel {...props} />;
        })}
      </div>
    );
  }
}
