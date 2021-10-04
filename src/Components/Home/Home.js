import React, { useEffect, useState } from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import img from '../../images/banner.png';
import './Home.css'
import scholarship from '../../images/scholarship.png'
import skilled from '../../images/skills.png';
import serviceImg from '../../images/consult.png';
import lecture from '../../images/lecture-sheet.png';
import Service from '../Service/Service';

const Home = () => {
    const [service, setService] = useState([])

    useEffect(() => {
        fetch('./service-data.JSON')
            .then(res => res.json())
            .then(data => setService(data.slice(0,4)))
    }, [])


    return (
        <Container className="text-white my-5">
            <Row>
                <Col md={6} className="d-flex justify-content-center align-items-center">
                    <div >
                        <h1>Academic Help Line</h1>
                        <p>AHL provides accurate, comprehensive and quality education for students in order to assist students to make a good career. We believe in our services. Please come and visit our center for more information.</p>
                    </div>
                </Col>
                <Col md={6} className='p-3'>
                    <img className="img-fluid" src={img} alt="" />
                </Col>
            </Row>
            
            <Row className="my-5">
                <h1 className='text-center my-5'>Why Choose Us</h1>
                
                <Col md={6} className="">
                    <div className="why-choose-us my-3 d-flex justify-content-center align-items-center ">
                        <img className="img-fluid" src={scholarship} alt="" />
                        <div className="mx-3">
                            <h4>Scholarship Facilities</h4>
                            <p>Money can not stop your learning. We provide scholarship opportunities for the bright students and also for the poor students.</p>
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
                        <img className="img-fluid" src={serviceImg} alt="" />
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
            <Row>
                <h1 className="text-center my-5">Our Services</h1>
                    
                {
                    service.map(serve =>
                        <Col md={3} key={serve.id}>
                            <Service
                                
                                serve={serve}
                            ></Service>
                        </Col>
                    
                    )
                }
                    
            </Row>
        </Container>
    );
};

export default Home;