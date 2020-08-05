import React, { Component } from 'react';
import { Card,Button,Row,Container,Col } from 'react-bootstrap';
class Team extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <center><h3>OUR TEAM</h3></center>
                <Row>
                <Card style={{ width: '18rem' }} as={Col}>
                <Card.Img variant="top" src="./—Pngtree—web development concept flat design_5455391.png" />
                <Card.Body>
                    <Card.Title>Developer 1</Card.Title>
                    <Card.Text>
                    Developer short details
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} as={Col}>
                <Card.Img variant="top" src="./—Pngtree—web development concept flat design_5455391.png" />
                <Card.Body>
                    <Card.Title>Developer 2</Card.Title>
                    <Card.Text>
                    Short details
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} as={Col}>
                <Card.Img variant="top" src="./—Pngtree—web development concept flat design_5455391.png" />
                <Card.Body>
                    <Card.Title>Developer 3</Card.Title>
                    <Card.Text>
                    Short details
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
                </Card>
                </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Team;