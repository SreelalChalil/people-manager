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
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}

export default ContactList;