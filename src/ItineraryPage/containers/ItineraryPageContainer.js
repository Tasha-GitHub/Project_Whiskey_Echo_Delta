import React, { Component } from 'react';
import '../styles/Itinerary.css';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Row className="white-box">
          <Col sm={6} md={6}>
            <p> hi</p>
          </Col>
          <Col sm={6} md={6}>
            <p> hi</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
