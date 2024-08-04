import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const LandingPage = () => {
  const [location, setLocation] = useState('');
  const [vets, setVets] = useState([
    { id: 1, name: 'Happy Paws Veterinary Clinic' },
    { id: 2, name: 'Healthy Pets Vet Hospital' },
    { id: 3, name: 'Animal Care Clinic' }
  ]);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to find vets based on location
    console.log(`Selected location: ${location}`);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1>Welcome to PetCare Finder</h1>
          <p>Find the best veterinary clinics near you and book appointments with ease.</p>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formLocation">
              <Form.Label>Select Your Location</Form.Label>
              <Form.Control as="select" value={location} onChange={handleLocationChange}>
                <option value="">Choose...</option>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formVet">
              <Form.Label>Select a Vet</Form.Label>
              <Form.Control as="select">
                <option value="">Choose...</option>
                {vets.map((vet) => (
                  <option key={vet.id} value={vet.name}>
                    {vet.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Find Vet
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
