import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VideoBackGround from './videobackground';
import './Contact.css';

const Contact = (props)=> {

    return(
        <Container className="contact">
         <VideoBackGround />
            <Row className="row-head-c"> {/* c for contact */}
                <Col className="col-c">
                If you would like to get in touch, you can reach me via:<br/>
                <a href="https://www.linkedin.com/in/romin-kershaw/" className="icon-hm">
                <FontAwesomeIcon icon={['fab','linkedin']} size='2x' className="brand-ico"/></a>
                <a href="mailto:rominkershaw@gmail.com" className="icon-hm">
                <FontAwesomeIcon icon={['fas','envelope']} size='2x' className="brand-ico"/></a>
                </Col>
            </Row>      
        </Container>
    );
}
export default Contact;