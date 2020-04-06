import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Container, Card, Button, Form} from 'react-bootstrap';

function LandingPage()
{
    return(
        <Container>
            <div>
                <Card>
                   <Card.Header> 
                       <b>✆ Contacts App </b>
                       <LinkContainer to="/home"><Button className="margin-left float-right" variant="outline-primary">Home</Button></LinkContainer>
                    </Card.Header>
                   <Card.Body>
                    <Form>
                    <Form.Group controlId="address">
                                <Form.Label>Email</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group controlId="job">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password"  type="password" placeholder="Password" />
                        </Form.Group>
                        <Button  variant="outline-success"  type="submit">Sign In</Button>      
                    </Form>
                    </Card.Body>
                </Card> 
            </div>
        </Container>
    )
}

export default LandingPage;