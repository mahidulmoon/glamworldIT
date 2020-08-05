import React, { Component } from 'react';
import { Nav,Form,FormControl,Button,Navbar } from 'react-bootstrap';
class Navgationbar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">GlameWorld Digital Services</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#feature">About</Nav.Link>
                <Nav.Link href="/">Contact</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        );
    }
}

export default Navgationbar;