import React, { useState, useEffect } from 'react';
import {Card, Table} from 'react-bootstrap';
import {db} from '../config/firebase';

function ContactList(){
    const [contacts,setContacts] = useState([]);
    useEffect(() => {
        const unsubscribe = db.collection("contacts")
                            .orderBy('name')
                            .onSnapshot( (querySnapshot) => {
                                const mycontacts = querySnapshot.docs.map((doc) => ({
                                        key: doc.id,
                                        ...doc.data()
                                    }))
                                setContacts(mycontacts)
                            })                      
        
        return () => unsubscribe() 
    },[])

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