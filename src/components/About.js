import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css';
const About = (props) => {

    return(
        <Container className="about">
        <Row className="row-head" as="h2">
            About Me
        </Row>
        <Row>
            <Col as="p" id="about-p">
            I graduated from Baruch College with a B.B.A in Computer Information Systems with original plans of becoming a business analyst. 
            However, during my capstone course in college I was in charge of creating my team's mobile application, and it made me realize how much I love to code.
            Since then, I have been mastering the craft that is coding, and working towards becoming a professional web developer through self teaching and building projects with what I have learned.
            </Col>
        </Row>
     <hr style={{border:'.5px solid black'}}></hr>
        <Row className="row-head" as="h2">
            Experience With
        </Row>
        <Row>
            <Col>
                <ul className="ul-exp">
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                </ul>
            </Col>
            <Col>
                <ul className="ul-exp">
                    <li>Bootstrap</li>
                    <li>Java</li>
                    <li>C#</li>
                    <li>Unity</li>
                </ul>
            </Col>
        </Row>
        </Container>
    );
}
export default About;

