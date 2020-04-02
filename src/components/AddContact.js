import React from 'react';
import { Form, Col, Button, Container, Card} from "react-bootstrap";

function AddContact(){
    return(
        <Container>
            <Card>
                <Card.Header>Add New Contact</Card.Header>
                <Card.Body>
                <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="nickname">
                            <Form.Label>Nick Name</Form.Label>
                            <Form.Control type="text" placeholder="Nick Name" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="Phone" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="phone2">
                            <Form.Label>Alternate Number</Form.Label>
                            <Form.Control type="text" placeholder="Alternate Number" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group  as={Col} controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>

                            <Form.Group  as={Col} controlId="facebook">
                                <Form.Label>Facebook Profile</Form.Label>
                                <Form.Control type="text" placeholder="facebook" />
                            </Form.Group>  
                        </Form.Row>

                        <Form.Group controlId="address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="Address" />
                        </Form.Group>

                        <Form.Group controlId="job">
                            <Form.Label>Job</Form.Label>
                            <Form.Control type="text" placeholder="Job/ Designation" />
                        </Form.Group>

                        <Form.Group controlId="notes">
                            <Form.Label>Notes</Form.Label>
                            <Form.Control type="text" placeholder="Notes" />
                        </Form.Group>  
                </Form>
                </Card.Body>
                <Card.Footer>
                    <span>&nbsp;</span>
                    <Button  variant="success" type="submit">Add Contact</Button></Card.Footer>
                
            </Card>
        </Container>
        
    )
}

export default AddContact;