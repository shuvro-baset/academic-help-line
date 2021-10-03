import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../images/banner-img.jpg'
const Home = () => {
    return (
        <Container className="text-white my-5">
            <Row>
                <Col md={6} className="d-flex justify-content-center align-items-center">
                    <div >
                        <h1>Academic Help Line</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi omnis aspernatur, tenetur quia veritatis repellat dolorem in, dicta odit doloribus eaque, commodi explicabo tempora animi illo aliquid dignissimos suscipit. Possimus.</p>
                    </div>
                </Col>
                <Col md={6}>
                    <img className="img-fluid" src={img} alt="" />
                </Col>
            </Row>
            <Row className="my-5">
                <Col md={6} className="d-flex justify-content-center align-items-center">
                    <div >
                        <h1>Academic Help Line</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi omnis aspernatur, tenetur quia veritatis repellat dolorem in, dicta odit doloribus eaque, commodi explicabo tempora animi illo aliquid dignissimos suscipit. Possimus.</p>
                    </div>
                </Col>
                <Col md={6}>
                    <img className="img-fluid" src={img} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Home;