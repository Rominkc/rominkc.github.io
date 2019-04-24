import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import pdf from '../assets/Romin_Kershaw_Resume_2019.pdf';
import './Home.css';


class Home extends Component {
  render() {
    return (
      <Container fluid>
      
        <Row className="home-header"> 
        <Col xs="12">
        <h1>Romin Kershaw</h1>
        <h2>Web Developer</h2>
        </Col> 
        </Row>

        <Row className="home-icon">
          <Col xs="12">
          <a href="https://www.linkedin.com/in/romin-kershaw/" className="icon-hm">
          <FontAwesomeIcon icon={['fab','linkedin']} size='3x' className="brand-ico"/></a>
          <a href="https://github.com/Rominkc"className="icon-hm">
          <FontAwesomeIcon icon={['fab','github']} size='3x' className="brand-ico"/></a>
          <a href={pdf}className="icon-hm">
          <FontAwesomeIcon icon={['fas','file-pdf']} size='3x' className="brand-ico"/></a>
          </Col>
        </Row>
       
        
      </Container>
    );
  }
}

export default Home;