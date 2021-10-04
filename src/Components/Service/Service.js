import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css'
const Service = (props) => {
    const {id, title, description, img} = props.serve;
    return (
        <Col md={3}>

            <Card className='custom-card'>
                <img src={img} alt="" className="img-fluid" />
                <Card.Body className="text-center">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </Card.Body>
            </Card>
            
        </Col>
    );
};

export default Service;