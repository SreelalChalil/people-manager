import React from 'react';
import {Nav, Navbar, NavDropdown, Button, Form, FormControl, Container,} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";


function Layout({children}) {
    return(
        <div>
        <Navbar bg="light" variant="light" expand="md" fixed="top">
            <LinkContainer to="/">
                <Navbar.Brand>✆ Contacts</Navbar.Brand>
            </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/new"><Nav.Link>+ New</Nav.Link></LinkContainer>
                    <Nav.Link href="/favourites">♡ Favorites</Nav.Link>
                    
                </Nav>
                <Form inline className="mr-auto">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-dark">Search</Button>
                </Form>
                <Nav className="float-right">
                <NavDropdown title="More" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Date Chart</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">List View</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                
                </Navbar.Collapse>
        </Navbar>
        <Container>
            <span style={{padding:10 }}></span>
            {children}
        </Container>
      </div>
    )
}

export default Layout;