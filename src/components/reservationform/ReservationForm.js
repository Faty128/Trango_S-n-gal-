import React, { useState } from 'react';
import { Container, Row, Col, Button, Badge, Card, Form } from 'react-bootstrap';
import './ReservationForm.css'; // facultatif pour styles personnalisés

const ReservationForm = () => {
  const [seats, setSeats] = useState([
    { id: 1, status: 'disponible' },
    { id: 2, status: 'réservé' },
    { id: 3, status: 'disponible' },
  ]);

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [formData, setFormData] = useState({});

  const handleSeatClick = (seat) => {
    if (seat.status === 'réservé') return;

    if (selectedSeats.includes(seat.id)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seat.id));
    } else {
      setSelectedSeats([...selectedSeats, seat.id]);
    }
  };

  const handleChange = (id, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value,
      },
    }));
  };

  const getStatusVariant = (status) => {
    return status === 'disponible' ? 'success' : 'danger';
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Choisissez vos sièges</h2>

      <Row className="justify-content-center mb-4">
        {Array.isArray(seats) &&
          seats.map((seat) => (
            <Col key={seat.id} xs={6} sm={4} md={3} lg={2} className="mb-3">
              <Card
                className={`text-center seat-card ${
                  selectedSeats.includes(seat.id)
                    ? 'border-primary border-2'
                    : ''
                } ${seat.status === 'réservé' ? 'bg-light text-muted' : 'bg-white'}`}
                onClick={() => handleSeatClick(seat)}
                style={{ cursor: seat.status === 'disponible' ? 'pointer' : 'not-allowed' }}
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

      {selectedSeats.length > 0 && (
        <div>
          <h4 className="mb-3">Informations des passagers</h4>
          {selectedSeats.map((seatId) => (
            <div key={seatId} className="mb-4 border p-3 rounded bg-light">
              <h5>Siège {seatId}</h5>
              <Form.Group className="mb-2" controlId={`nom-${seatId}`}>
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  type="text"
                  value={formData[seatId]?.nom || ''}
                  onChange={(e) => handleChange(seatId, 'nom', e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId={`prenom-${seatId}`}>
                <Form.Label>Prénom</Form.Label>
                <Form.Control
                  type="text"
                  value={formData[seatId]?.prenom || ''}
                  onChange={(e) => handleChange(seatId, 'prenom', e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId={`tel-${seatId}`}>
                <Form.Label>Téléphone</Form.Label>
                <Form.Control
                  type="tel"
                  pattern="^7[05678][0-9]{7}$"
                  value={formData[seatId]?.tel || ''}
                  onChange={(e) => handleChange(seatId, 'tel', e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId={`piece-${seatId}`}>
  <Form.Label>Numéro de la pièce d’identité <span className="text-muted">(optionnel)</span></Form.Label>
  <Form.Control
    type="text"
    placeholder="Ex: CNI 123456789"
    value={formData[seatId]?.piece || ''}
    onChange={(e) => handleChange(seatId, 'piece', e.target.value)}
  />
</Form.Group>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default ReservationForm;
