import React from 'react';
import {Card, Table} from 'react-bootstrap';

function ContactList(){
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
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>7894120273</td>
                    <td>mark@example.com</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>7412589630</td>
                    <td>jacob@example.com</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Larry Hudson</td>
                    <td>8794521630</td>
                    <td>larry@example.com</td>
                    </tr>
                </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}

export default ContactList;