import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/firebase"; // adapte le chemin si besoin
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "./Login.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setSubmitted(true);
      toast.success("Lien de réinitialisation envoyé à votre adresse email !");
    } catch (error) {
      toast.error("Erreur : " + error.message);
    }
  };

  return (
    <div className="body">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="form-container">
              <h2 className="title" style={{ color: "black" }}>Mot de passe oublié</h2>
                    <p className="subtitle">Entrez votre adresse email pour réinitialiser votre mot de passe</p>
              <Form onSubmit={handleReset} className="form">
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Entrez votre adresse email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                    required
                  />
                </Form.Group>
                <button type="submit" className="form-btn">
                  Réinitialiser le mot de passe
                </button>
              </Form>
              {submitted && (
                <p className="mt-3 text-success">Vérifiez votre boîte de réception.</p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ForgotPassword;
