import React from 'react';
import { Button, Card, Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import welcomeImage from 'src\th.jpg'; 

const HomePage = () => {
    return (
        <Container className="text-center" style={{ backgroundColor: '#f8f9fa', padding: '20px', border: '1px solid #dee2e6', borderRadius: '5px' }}>
            <h1 style={{ color: '#343a40' }}>Welcome to Our Comic Book Store!</h1>
            <Image src={welcomeImage} fluid style={{ marginBottom: '20px' }} />
            <Button variant="primary" style={{ boxShadow: '2px 2px 10px rgba(0,0,0,0.3)' }}>Shop Now</Button>
            <Row className="mt-4">
                <Col>
                    <Card style={{ width: '18rem', margin: '0 auto', marginTop: '20px' }}>
                        <Card.Body>
                            <Card.Title>Featured Product</Card.Title>
                            <Card.Text>
                                Check out our latest comic releases and bestsellers!
                            </Card.Text>
                            <Button variant="secondary">View Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>
        </Container>
    );
};

export default HomePage;
