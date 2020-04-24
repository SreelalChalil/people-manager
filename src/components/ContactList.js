import React, { useState, useEffect } from 'react';
import {Card, Table} from 'react-bootstrap';
import firebase from '../config/firebase';

function ContactList(){

    const [contacts,setContacts] = useState([]);

    const ref = firebase.firestore().collection("contacts");
    const onCollectionUpdate = (querySnapshot) => {
        const mycontacts =[];
        querySnapshot.forEach((doc) => {
            const { name,email,phone } = doc.data();
            mycontacts.push({
                key: doc.id,
                name,
                phone,
                email,
              });
        });
        setContacts(mycontacts);
    }

    useEffect(() => {
        var unSubscribe = ref.onSnapshot(onCollectionUpdate);
    });

    return(
        <Card>
            <Card.Header>All Contacts</Card.Header>
            <Card.Body>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    </tr>
                </thead>
                
                <tbody>
                  
                { contacts.map((contact,i) =>
                    <tr key={contact.key}>
                        <td>{i+1}</td>
                        <td>{contact.name}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.email}</td>
                    </tr>
                    )}
                </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}

export default ContactList;