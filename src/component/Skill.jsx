import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../App.css';
import 'animate.css';

export default class Example extends React.Component {
  render() {
    return (
        <div className="my-4 skill text-center text-primary" id="skill">
      <Container>
        <Row className="animated bounceInLeft">
          <Col><img className="" src={require('../img/CSS3_Logo.svg')} /></Col>
          <Col><img className="" src={require('../img/2.png')} /></Col>
          <Col><img className="" src={require('../img/4.png')} /></Col>
          <Col><img className="" src={require('../img/4.svg')} /></Col>
          <Col><img className="" src={require('../img/5.svg')} /></Col>
          <Col><img className="" src={require('../img/php.png')} /></Col>
        </Row>
            <h1>HTML</h1>
            <div className="shadow-lg progress my-3">
            <div className="progress-bar bg-success" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h1>CSS</h1>
            <div className="shadow-lg progress my-3">
            <div className="progress-bar bg-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h1>Javascript</h1>
            <div className="shadow-lg progress my-3">
            <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h1>PHP</h1>
            <div className="shadow-lg progress my-3">
            <div className="progress-bar bg-danger" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
    </Container>
        </div>
        );
    }
}