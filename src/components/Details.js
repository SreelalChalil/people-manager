import React, {useState} from 'react';
import {Card,Button,Table} from 'react-bootstrap';
import firebase from  '../config/firebase';

const Details = (props) => {
    
    //defined a state to store the contact information using usestate hooks
    // contact is defined as an empty object
    const [contact,setContact] = useState({});
    // firebase.firestore().collection('contacts').get().then((querySnapshot) => {
    //     //for each document in the collection
    //     querySnapshot.forEach((doc) => {
    //         //set the document object to state object
    //         setContact(doc.data());
    //     });  
    // });

    firebase.firestore().collection('contacts').doc(props.match.params.id).get().then((doc) => {
        //set the document object to state object
        setContact(doc.data());  
    });
   
    return(
        <Card>
            <Card.Header>
                Details
                <Button variant="outline-primary" size="sm" className="float-right margin-left">Edit</Button>
                <Button variant="outline-danger"size="sm"  className="float-right margin-left">Delete</Button>
            </Card.Header>
            <Card.Body>
                <Table>
                    <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{contact.name}</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>{contact.phone}</td>
                            </tr>
                            <tr>
                                <td>Alt. Phone</td>
                                <td>{contact.altphone}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{contact.email}</td>
                            </tr>
                            <tr>
                                <td>Facebook</td>
                                <td>{contact.facebook}</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>{contact.address}</td>
                            </tr>
                            <tr>
                                <td>Job</td>
                                <td>{contact.job}</td>
                            </tr>
                            <tr>
                                <td>Notes</td>
                                <td>{contact.notes}</td>
                            </tr>
                    </tbody>
                    
                    
                </Table>
            </Card.Body>
        </Card>
    )
}

export default Details;