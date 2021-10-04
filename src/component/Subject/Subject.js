import React from 'react';
import { Card } from 'react-bootstrap';
import './Subject.css'
const Subject = (props) => {
    const { name, cost, lecturer, img } = props.subject;
    return (
        <Card className="cart">
            <Card.Img variant="top" src={img} height="265px" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text> Price: ${cost} </Card.Text>
                <Card.Text> <i className="far fa-user"></i>&nbsp;&nbsp;{lecturer} </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Subject;