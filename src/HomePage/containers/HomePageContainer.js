import React, { Component } from 'react';
import '../styles/HomePage.css';
// import logo from './logo.svg';
// import './App.css';
//import Navbar from '../../Common/components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <section className="hero_img">
          <h2 className="hero_text">Rob &amp; Tasha</h2>
          <p className="hero_date">4/29/19</p>
        </section>
      </div>
    );
  }
}

export default App;
