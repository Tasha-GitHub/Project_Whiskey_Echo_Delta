import React, { Component } from 'react';
import '../styles/Itinerary.css';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Brunch from '../components/Brunch';
import Rehersal from '../components/Rehersal';
import Ceremony from '../components/Ceremony';
import Reception from '../components/Reception';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: <Rehersal />
    };
  }

  changeEvent(event) {
    console.log(this);
    let divContent;
    switch (event) {
      case 'rehersal':
        divContent = <Rehersal />;
        break;
      case 'ceremony':
        divContent = <Ceremony />;
        break;
      case 'reception':
        divContent = <Reception />;
        break;
      case 'brunch':
        divContent = <Brunch />;
        break;
    }
    this.setState({ content: divContent });
  }

  render() {
    return (
      <div className="container-fluid">
        {this.state.content}
        <Row className="links">
          <div
            className="event"
            onClick={this.changeEvent.bind(this, 'rehersal')}
          >
            <div className="fa fa-heart-o dot" aria-hidden="true" />
            <Link to="#">
              <span>Rehersal Dinner </span>
              <br />
              <span>XX/XX/XX XXPM</span>
            </Link>
          </div>
          <div
            className="event"
            onClick={this.changeEvent.bind(this, 'ceremony')}
          >
            <div className="fa fa-heart-o dot" aria-hidden="true" />
            <Link to="#">
              <span>Ceremony </span>
              <br />
              <span>XX/XX/XX XXPM</span>
            </Link>
          </div>
          <div
            className="event"
            onClick={this.changeEvent.bind(this, 'reception')}
          >
            <div className="fa fa-heart-o dot" aria-hidden="true" />
            <Link to="#">
              <span>Reception </span>
              <br />
              <span>XX/XX/XX XXPM</span>
            </Link>
          </div>
          <div
            className="event"
            onClick={this.changeEvent.bind(this, 'brunch')}
          >
            <div className="fa fa-heart-o dot" aria-hidden="true" />
            <Link to="#">
              <span>Farewell Brunch </span>
              <br />
              <span>XX/XX/XX XXPM</span>
            </Link>
          </div>
        </Row>
      </div>
    );
  }
}

export default App;
