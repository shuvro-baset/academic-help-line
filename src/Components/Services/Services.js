import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [service, setService] = useState([])

    useEffect(() => {
        fetch('./service-data.JSON')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <Container>
            <Row>
                {
                service.map(serve => 
                    <Col md={4} className='my-3'>
                        <Service
                        key={serve.id}
                        serve={serve}
                        ></Service>
                    </Col>

                )}
            </Row>
        </Container>
    );
};

export default Services;<h3>This is services</h3>