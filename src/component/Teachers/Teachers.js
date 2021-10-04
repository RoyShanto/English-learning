import React from 'react';
import { Card } from 'react-bootstrap';

const Teachers = (props) => {
    const { name, img, detail } = props.teachers;
    return (
        <Card className="cart">
            <Card.Img variant="top" src={img} height="265px" />
            <Card.Body>
                <Card.Title><h4>{name}</h4></Card.Title>
                <Card.Text>{detail}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Teachers;