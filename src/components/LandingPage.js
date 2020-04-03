import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Container, Card, Button} from 'react-bootstrap';

function LandingPage()
{
    return(
        <Container>
            <div>
                <Card>
                   <Card.Header> 
                       <b>✆ Contacts </b>
                       <LinkContainer to="/home"><Button className="margin-left" variant="outline-primary">Home</Button></LinkContainer>
                       <Button variant="outline-dark" className="float-right">Sign Up</Button>
                    </Card.Header>
                   <Card.Body>

                    </Card.Body>
                </Card> 
            </div>
        </Container>
    )
}

export default LandingPage;