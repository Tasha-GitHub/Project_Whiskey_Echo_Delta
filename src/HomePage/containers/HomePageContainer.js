import React, { Component } from 'react';
import '../styles/HomePage.css';
import Navbar from '../../Common/components/Navbar';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
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
        <section className="hero_img">
          <h2 className="hero_text">Rob &amp; Tasha</h2>
          <p className="hero_date">4/29/19</p>
        </section>
      </div>
    );
  }
}

export default App;
