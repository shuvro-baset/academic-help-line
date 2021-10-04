import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Teacher from '../Teacher/Teacher';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch('./teachers-data.JSON')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    return (
        <Container>
            <Row>
            {
                teachers.map(teacher => 
                <Col md={4}>
                    <Teacher
                        key={teacher.id} // passing key value for ignoring react warning
                        teacher={teacher} // pass teacher data
                    ></Teacher>
                </Col>
                )
            }
            </Row>
        </Container>
    );
};

export default Teachers;