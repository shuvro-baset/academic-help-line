import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../images/banner-img.jpg'
import './Home.css'
import scholarship from '../../images/scholarship.png'
import skilled from '../../images/skills.png';
import service from '../../images/consult.png';
import lecture from '../../images/lecture-sheet.png';

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
                <h1 className='text-center'>Why Choose Us</h1>
                
                <Col md={6} className="">
                    <div className="why-choose-us my-3 d-flex justify-content-center align-items-center ">
                        <img className="img-fluid" src={scholarship} alt="" />
                        <div className="mx-3">
                            <h4>Scholarship Facilities</h4>
                            <p>We provide scholarship opportunities for the bright students and also for the poor students.</p>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="why-choose-us my-3 d-flex justify-content-center align-items-center">
                        <img className="img-fluid" src={skilled} alt="" />
                        <div className="mx-3">
                            <h4>Skilled Teachers</h4>
                            <p>A good teacher teaches in an excellent way and imparts knowledge however a great teacher transform the students and make them human.</p>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="why-choose-us my-3 d-flex justify-content-center align-items-center">
                        <img className="img-fluid" src={service} alt="" />
                        <div className="mx-3">
                            <h4>Good Service</h4>
                            <p>We believe in quality not quantity. We provide a service that students need. Our first priority is service.</p>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="why-choose-us my-3 d-flex justify-content-center align-items-center">
                        <img className="img-fluid" src={lecture} alt="" />
                        <div className="mx-3">
                            <h4>Free Lecture Sheet</h4>
                            <p>We provide qualified free lecture sheet and hand notes before the lecture.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;