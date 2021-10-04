import React from 'react';
import { Card } from 'react-bootstrap';
import './Teacher.css'
const Teacher = (props) => {

    // destructuring teacher data.
    const {name, designation, subject, img} = props.teacher;

    return (
        <Card className='teacher-card my-3 text-white p-4'>
            <div className="d-flex justify-content-center my-3">
                <img src={img} className="img-fluid teacher-img" alt="" />
            </div>
            <p>  <b>Name:</b> {name}</p>
            <p>  <b>Designation:</b> {designation} </p>
            <p>  <b>Subject:</b> {subject}</p>
        </Card>
    );
};

export default Teacher;