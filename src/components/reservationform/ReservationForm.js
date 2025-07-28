import React, { useState } from 'react';
import { Container, Row, Col, Button, Badge, Card } from 'react-bootstrap';
import './ReservationForm.css'; // Pour les styles personnalisés (optionnel)

const ReservationForm = () => {
  const [seats, setSeats] = useState([
    { id: 1, status: 'disponible' },
    { id: 2, status: 'réservé' },
    { id: 3, status: 'disponible' },
  ]);

  const getStatusVariant = (status) => {
    return status === 'disponible' ? 'success' : 'danger';
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Choisissez vos sièges</h2>
      <Row className="justify-content-center">
        {Array.isArray(seats) && seats.map((seat) => (
          <Col key={seat.id} xs={6} sm={4} md={3} lg={2} className="mb-3">
            <Card
              className={`text-center seat-card ${
                seat.status === 'réservé' ? 'bg-light text-muted' : 'bg-white'
              }`}
              border={seat.status === 'disponible' ? 'success' : 'secondary'}
            >
              <Card.Body>
                <Card.Title>Siège {seat.id}</Card.Title>
                <Badge bg={getStatusVariant(seat.status)}>
                  {seat.status.toUpperCase()}
                </Badge>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ReservationForm;
