import React, { Component } from 'react';
import Navbar from './Common/components/Navbar';
import Router from './routes';

class AppContainer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <header>
          <nav>
            {/* Nav tabs */}
            <a id="test_tag" href="photos.html">
              <Navbar />
            </a>
          </nav>
        </header>
        <Router />
      </div>
    );
  }
}

export default AppContainer;
