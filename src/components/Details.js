import React from 'react';
import {Card,Button} from 'react-bootstrap';

function Details() {
    return(
        <Card>
            <Card.Header>
                Details
                <Button variant="outline-primary" size="sm" className="float-right margin-left">Edit</Button>
                <Button variant="outline-danger"size="sm"  className="float-right margin-left">Delete</Button>
            </Card.Header>
            <Card.Body></Card.Body>
        </Card>
    )
}

export default Details;