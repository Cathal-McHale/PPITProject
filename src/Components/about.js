// src/About.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Footer from './footer';




function About() {
  return (
    <Container fluid className="p-5">
      <Row className="justify-content-center mb-5">
        <Col md={8}>
          <h1 className="text-center mb-4">About Us</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Mauris maximus velit commodo, dapibus dui vel, ullamcorper mi. Pellentesque sit amet vestibulum lorem. Nulla facilisi. In vel enim nec lorem dapibus gravida nec a odio. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.
          </p>
          <p className="text-justify">
            Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center mb-5">
        <Col md={4} className="mb-4">
          <Image src="https://via.placeholder.com/300" roundedCircle fluid />
        </Col>
        <Col md={4} className="mb-4">
          <h2>Our Mission</h2>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac
          </p>
        </Col>
        <Col md={4}>
          <h2>Our Vision</h2>
          <p>
            Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
