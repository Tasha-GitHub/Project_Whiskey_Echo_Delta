import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap';

class NavBar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     key: 1
  //   };
  // }

  render() {
    // console.log(this.props.location.pathname);
    return (
      <Navbar>
        <Navbar.Header />
        <Nav pullRight>
          <li role="presentation" className="">
            <Link to="/">Home</Link>
          </li>
          <li role="presentation" className="">
            <Link to="/itinerary">Itinerary</Link>
          </li>
          <li role="presentation" className="">
            <Link to="/photos">Photos</Link>
          </li>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
