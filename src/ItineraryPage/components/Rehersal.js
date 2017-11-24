import React, { Component } from 'react';
import '../styles/Itinerary.css';
import { Col, Image } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import rehersalImg from '../images/rehersal-dinner.jpg';

class Rehersal extends Component {
  render() {
    return (
      <Row className="white-box">
        <Col sm={12} md={9} className="left-basin">
          <section>
            <Image className="rehersalImg" src={rehersalImg} />
            <div>
              <h5> Join us for a good bye brunch celebration!</h5>
              <p>
                {' '}
                Breakfast in bed is nice, but a brunch with the Bride and Groom
                can be even better. Come say good bye and enjoy some tastey
                breakfast before you hit the road.{' '}
              </p>
            </div>
          </section>
        </Col>
        <Col sm={12} md={3} className="right-basin">
          <p>Buena Vista Palace</p>
          <p>xx/xx/xx xx:xxpm</p>
          <p> Attire </p>
          <p> Casual </p>
        </Col>
      </Row>
    );
  }
}

export default Rehersal;
