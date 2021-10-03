import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <h3>AHL</h3>
                </Col>
                <Col md={4}>
                    <h3>Home</h3>
                    <h3>About</h3>
                    <h3>Services</h3>

                </Col>
                <Col md={4}>
                    <h3>Contact Us</h3>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;<h3>This is footer</h3>