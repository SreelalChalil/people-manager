import React, {useState} from 'react';
import {Card} from 'react-bootstrap';
import placeholder from '../assets/placeholder.png'

const ContactCard = ({contact}) => {
    
    return(
        <Card className="mb-4 box-shadow">
            <Card.Img variant="top" src={contact.photo || placeholder} height="275" />
            <Card.Body>
                <Card.Title>{contact.name}</Card.Title>
                <Card.Text>{contact.phone}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default ContactCard;