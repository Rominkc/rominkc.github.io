import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './CustomNavBar.css';

export default class CustomNavBar extends Component {
  render() {
    return (
      <Nav justify className='justify-content-center'>
        <Nav.Item>
          <Nav.Link eventKey={1} as={Link} to='/' className='Navbar-sty'>
            Home
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey={2}
            as={Link}
            to='/projects'
            className='Navbar-sty'
          >
            Projects
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey={3} as={Link} to='/about' className='Navbar-sty'>
            About
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey={4} as={Link} to='/contact' className='Navbar-sty'>
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}
