import React from 'react';
import 'holderjs';
import {Card} from 'react-bootstrap';

function ContactCard() {
    return(
        <Card style={{ width: '13rem' }}>
        <Card.Img variant="top" src="https://avatars2.githubusercontent.com/u/10542651?s=460&u=e2c5a54387ecc81e63f3fdb5df49e177fce53c32&v=4" />
        <Card.Body>
            <Card.Title>Sreelal</Card.Title>
            <Card.Text>7994106174</Card.Text>
            <Card.Text>sreelal.c@live.com</Card.Text>
        </Card.Body>
        </Card>
    )
}

export default ContactCard;