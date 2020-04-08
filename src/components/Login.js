import React,{Component} from 'react';
import { withRouter } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {Container, Card, Button, Form} from 'react-bootstrap';
import firebase from '../config/firebase';

class Login extends Component{

    state = {
        email: '',
        password: '',
        error: null,
      };
    
      handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      };
     
     handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
     firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((user) => {
            this.props.history.push('/home');
          })
          .catch((error) => {
            this.setState({ error: error });
          });
      };

     render(){
        const { email, password, error } = this.state;
            return(
                <Container>
                    <div>
                        <Card>
                        <Card.Header> 
                            <b>✆ Contacts App </b>
                            <LinkContainer to="/home"><Button className="margin-left float-right" variant="outline-primary">Home</Button></LinkContainer>
                            </Card.Header>
                        <Card.Body>
                        {error ? (
                                    <div>
                                    <h6 style={{color:'red'}}>
                                        {error.message}
                                    </h6>
                                    </div>
                                ) : null }
                            <Form>
                                <Form.Group controlId="address">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control name="email" type="email" placeholder="Email" value={email} onChange={this.handleInputChange} />
                                </Form.Group>

                                <Form.Group controlId="job">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="password"  type="password" placeholder="Password" value={password} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Button  variant="outline-success"  type="submit" onClick={this.handleSubmit}>Sign In</Button>      
                            </Form>
                            </Card.Body>
                        </Card> 
                    </div>
                </Container>
            )
        }
}
export default withRouter(Login);