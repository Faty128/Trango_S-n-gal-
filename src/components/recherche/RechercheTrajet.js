import React, { useState } from 'react';
import { Container, Form, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RechercheTrajet = () => {
  const [formData, setFormData] = useState({
    villeDepart: '',
    villeArrivee: '',
    date: '',
    typeVehicule: '',
  });

  const [resultats, setResultats] = useState([]);

  const trajetsSimulés = [
    {
      id: 1,
      depart: 'Dakar',
      arrivee: 'Saint-Louis',
      heure: '08:00',
      prix: 5000,
      places: 3,
      type: '7 places',
    },
    {
      id: 2,
      depart: 'Dakar',
      arrivee: 'Thiès',
      heure: '10:00',
      prix: 3000,
      places: 5,
      type: 'Minibus',
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRecherche = (e) => {
    e.preventDefault();

    const resultatsFiltres = trajetsSimulés.filter(
      (trajet) =>
        (!formData.villeDepart || trajet.depart.toLowerCase().includes(formData.villeDepart.toLowerCase())) &&
        (!formData.villeArrivee || trajet.arrivee.toLowerCase().includes(formData.villeArrivee.toLowerCase())) &&
        (!formData.typeVehicule || trajet.type === formData.typeVehicule)
    );

    setResultats(resultatsFiltres);
  };

  return (
   <Container className="py-5">
  <h2 className="mb-4 text-center text-primary fw-bold">🔍 Rechercher un trajet</h2>

  <Form onSubmit={handleRecherche} className="bg-light p-4 rounded shadow-sm mb-5">
    <Row className="g-3">
      <Col md={4}>
        <Form.Group controlId="villeDepart">
          <Form.Label className="fw-semibold">Ville de départ</Form.Label>
          <Form.Control
            type="text"
            name="villeDepart"
            placeholder="Ex: Dakar"
            value={formData.villeDepart}
            onChange={handleChange}
            className="shadow-sm"
          />
        </Form.Group>
      </Col>

      <Col md={4}>
        <Form.Group controlId="villeArrivee">
          <Form.Label className="fw-semibold">Ville d’arrivée</Form.Label>
          <Form.Control
            type="text"
            name="villeArrivee"
            placeholder="Ex: Saint-Louis"
            value={formData.villeArrivee}
            onChange={handleChange}
            className="shadow-sm"
          />
        </Form.Group>
      </Col>

      <Col md={4}>
        <Form.Group controlId="date">
          <Form.Label className="fw-semibold">Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="shadow-sm"
          />
        </Form.Group>
      </Col>
    </Row>

    <Row className="mt-3">
      <Col md={4}>
        <Form.Group controlId="typeVehicule">
          <Form.Label className="fw-semibold">Type de véhicule</Form.Label>
          <Form.Select
            name="typeVehicule"
            value={formData.typeVehicule}
            onChange={handleChange}
            className="shadow-sm"
          >
            <option value="">Peu importe</option>
            <option>7 places</option>
            <option>Minibus</option>
            <option>Bus</option>
          </Form.Select>
        </Form.Group>
      </Col>
    </Row>

    <div className="mt-4">
      <Button variant="primary" type="submit" className="w-40 fw-bold">
        🔍 Rechercher
      </Button>
    </div>
  </Form>

  {resultats.length > 0 && (
    <div className="mt-4">
      <h4 className="text-success">Résultats trouvés :</h4>
      {resultats.map((trajet) => (
        <Card key={trajet.id} className="mb-3 shadow-sm border-success">
          <Card.Body>
            <Card.Title className="text-dark fw-bold fs-5">
              {trajet.depart} ➔ {trajet.arrivee}
            </Card.Title>
            <Card.Text className="text-secondary">
              Départ : <strong>{trajet.heure}</strong><br />
              Prix : <strong className="text-success">{trajet.prix} FCFA</strong><br />
              Places restantes : {trajet.places}<br />
              Véhicule : {trajet.type}
            </Card.Text>
            <Button variant="outline-success">
                <Link to="/mestraget" className="sign-up-link"> Réserver </Link>
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  )}

  {resultats.length === 0 && (
    <p className="mt-4 text-muted text-center">Aucun trajet trouvé pour cette recherche.</p>
  )}
</Container>

  );
};

export default RechercheTrajet;
