import React, { Component } from 'react';
import {Form,Row,Col,Container,Button} from 'react-bootstrap';
class Contact extends Component {
    render() {
        return (
            <Container>
                <center><h3>Contact Us</h3></center>
                <Form>
                    <Row>
                    <Form.Group as={Col}>
                        
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" placeholder="Your name" />
                            </Form.Group>
                        
                        
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control type="email" placeholder="Your email" />
                            </Form.Group>
                        
                        
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Your Phone</Form.Label>
                                <Form.Control type="text" placeholder="Your Number" />
                            </Form.Group>
                        
                    </Form.Group>
                    <Form.Group as={Col} controlId="formBasicEmail">
                    <Form.Group>
                            <Form.Label>Your Message</Form.Label>
                                <Form.Control as="textarea" rows="8" />
                            </Form.Group>
                    </Form.Group>
                    </Row>
                    <center><Button type="primary">Submit</Button></center>
                </Form>
            </Container>
        );
    }
}

export default Contact;