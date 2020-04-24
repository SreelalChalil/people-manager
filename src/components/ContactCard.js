import React, {useState} from 'react';
import {Card} from 'react-bootstrap';
import firebase from '../config/firebase';

const ContactCard = ({id}) => {
    const [contact,setContact] = useState({});

    firebase.firestore().collection('contacts').doc(id).get().then((doc) => {
            //set the document object to state object
            setContact(doc.data());  
    });

    return(
        <Card className="mb-4 box-shadow">
        <Card.Img variant="top" src="https://avatars2.githubusercontent.com/u/10542651?s=460&u=e2c5a54387ecc81e63f3fdb5df49e177fce53c32&v=4" />
        <Card.Body>
            <Card.Title>{contact.name}</Card.Title>
            <Card.Text>{contact.phone}</Card.Text>
            <Card.Text>{contact.email}</Card.Text>
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