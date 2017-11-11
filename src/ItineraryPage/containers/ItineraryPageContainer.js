import React, { Component } from 'react';
import '../styles/Itinerary.css';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
        <Row className="a-links">
          <i class="fa fa-heart-o" aria-hidden="true" />
          <i class="fa fa-heart" aria-hidden="true" />
          <Link to="#">Rehersal Dinner XX/XX/XX XXPM</Link>
          <i class="fa fa-heart" aria-hidden="true" />
          <i class="fa fa-heart-o" aria-hidden="true" />
          <Link to="#">Ceremony XX/XX/XX XXPM</Link>
          <i class="fa fa-heart-o" aria-hidden="true" />
          <i class="fa fa-heart" aria-hidden="true" />
          <Link to="#">Reception XX/XX/XX XXPM</Link>
          <i class="fa fa-heart" aria-hidden="true" />
          <i class="fa fa-heart-o" aria-hidden="true" />
          <Link to="#">Farewell Brunch XX/XX/XX XXPM</Link>
        </Row>
      </div>
    );
  }
}

export default App;
