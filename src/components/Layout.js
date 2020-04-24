import React,{ useState, useEffect } from 'react';
import { withRouter} from 'react-router-dom';
import firebase from '../config/firebase';
import {Nav, Navbar, Form, FormControl, Container,} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import SignOut from './SignOut';

function Layout(props) {

    const children = props.children;
    const [authenticated,setAuthenticated]= useState(false);

    useEffect(() => {
      firebase.auth().onAuthStateChanged((authenticated) => {
          authenticated? setAuthenticated(true) : props.history.replace("/");
      });
    }); 

    return(
        authenticated?
        <div>
        <Navbar bg="light" variant="light" expand="md" fixed="top">
            <Container>
            <LinkContainer to="/home">
                <Navbar.Brand>✆ Contacts</Navbar.Brand>
            </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/new"><Nav.Link>+ New</Nav.Link></LinkContainer>
                    <LinkContainer to="/favourites"><Nav.Link>❤ Favorites</Nav.Link></LinkContainer>
                    <LinkContainer to="/all"><Nav.Link> 🗏 List</Nav.Link></LinkContainer>
                </Nav>
                <Form inline className="mr-auto">
                    <FormControl type="text" placeholder="&#128269; Search" className="mr-sm-3" size="sm" />
                </Form>
                <Nav className="float-right">
                    <LinkContainer to="/manage-data"><Nav.Link>Manage Data</Nav.Link></LinkContainer>
                    <SignOut/>
                </Nav>              
                </Navbar.Collapse>
            </Container>
            
        </Navbar>
        <Container>
            <span style={{padding:10 }}></span>
            {children}
        </Container>
        
      </div>
      :null
    )
}

export default withRouter(Layout);