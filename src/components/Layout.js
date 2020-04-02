import React from 'react';
import {Nav, Navbar, NavDropdown, Form, FormControl, Container,} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";


function Layout({children}) {
    return(
        <div>
        <Navbar bg="light" variant="light" expand="md" fixed="top">
            <Container>
            <LinkContainer to="/">
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
                <NavDropdown title="Settings" id="basic-nav-dropdown">
                    <LinkContainer to="/manage-data"><NavDropdown.Item>Manage Data</NavDropdown.Item></LinkContainer>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                
                </Navbar.Collapse>
            </Container>
            
        </Navbar>
        <Container>
            <span style={{padding:10 }}></span>
            {children}
        </Container>
      </div>
    )
}

export default Layout;