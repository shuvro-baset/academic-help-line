import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css'
const Service = (props) => {
    const {title, description, img} = props.serve;
    
    return (

        <Card className='custom-card text-white'>
            <img src={img} alt="" className="img-fluid" />
            <Card.Body className="text-center">
                <h3>{title}</h3>
                <p>{description}</p>
            </Card.Body>
        </Card>
            
    );
};

export default Service;