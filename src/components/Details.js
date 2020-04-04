import React from 'react';
import {Card,Button,Table} from 'react-bootstrap';

function Details() {
    return(
        <Card>
            <Card.Header>
                Details
                <Button variant="outline-primary" size="sm" className="float-right margin-left">Edit</Button>
                <Button variant="outline-danger"size="sm"  className="float-right margin-left">Delete</Button>
            </Card.Header>
            <Card.Body>
                <Table>
                    <tr>
                        <td>Name</td>
                        <td>Sreelal</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>7994106174</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>sreelal.ub@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>Kozhikode, Kerala</td>
                    </tr>
                    
                </Table>
            </Card.Body>
        </Card>
    )
}

export default Details;