import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import notFoundImage from 'src\assets\404-error-page.webp'; 

const NotFound = () => {
    return (
        <Container className="text-center" style={{ padding: '50px', backgroundColor: '#f8f9fa' }}>
            <Row>
                <Col md={6} style={{ margin: 'auto' }}>
                    <Image src={notFoundImage} fluid />
                </Col>
            </Row>
            <h1 style={{ color: '#dc3545' }}>404 - Not Found</h1>
            <p style={{ color: '#343a40' }}>Oops! The page you are looking for does not exist.</p>
            <Button variant="primary" href="/">Go to Home</Button>
        </Container>
    );
};

export default NotFound;
