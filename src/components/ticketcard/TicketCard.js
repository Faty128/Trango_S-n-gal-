import React from 'react';
import { Card, Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { FaQrcode } from 'react-icons/fa';

const TicketCard = ({ ticket }) => {
  // Exemple de ticket si aucune donnée passée en props
  const sampleTicket = {
    nom: 'Faty Niang',
    téléphone: '77 123 45 67',
    départ: 'Dakar',
    arrivée: 'Thiès',
    date: '2025-08-05',
    heure: '14:00',
    siège: '12A',
    prix: '3500 FCFA',
    codeQR: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=FATYNIANG123',
  };

  const t = ticket || sampleTicket;

  return (
    <Container className="py-5 d-flex justify-content-center">
      <Card className="shadow-lg ticket-card">
        <Card.Body>
          <Row>
            <Col md={8}>
              <h4 className="fw-bold mb-3">🎫 Ticket de réservation</h4>
              <p><strong>Nom :</strong> {t.nom}</p>
              <p><strong>Téléphone :</strong> {t.téléphone}</p>
              <p><strong>Trajet :</strong> {t.départ} ➜ {t.arrivée}</p>
              <p><strong>Date & Heure :</strong> {t.date} à {t.heure}</p>
              <p><strong>Siège :</strong> <Badge bg="primary">{t.siège}</Badge></p>
              <p><strong>Prix :</strong> <Badge bg="success">{t.prix}</Badge></p>
            </Col>
            <Col md={4} className="text-center">
              <img src={t.codeQR} alt="QR Code" className="qr-code img-fluid mb-2" />
              <div><FaQrcode /> Code QR</div>
            </Col>
          </Row>
          <div className="text-end mt-3">
            <Button variant="secondary" onClick={() => window.history.back()}>
              Retour
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TicketCard;
