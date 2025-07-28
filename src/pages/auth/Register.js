// src/pages/auth/Register.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";
import "./Login.css"; // On utilise les mêmes styles que Login
import { toast } from "react-toastify";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas");
      return;
    }

    try {
      await doCreateUserWithEmailAndPassword(email, password);
      toast.success("Inscription réussie !");
      navigate("/acceuil");
    } catch (error) {
      toast.error("Erreur lors de l'inscription");
      console.error(error);
    }
  };

  return (
    <div className="body">
      <Container>
        <Row>
          <Col lg={12} md={6}>
            <div className="d-flex justify-content-center">
              <div className="form-container">
                <p className="title" style={{ color: "black" }}>Créer un compte</p>
                <form className="form" onSubmit={handleRegister}>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div className="password-container">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      className="input password-input"
                      placeholder="Mot de passe"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={togglePasswordVisibility}
                    >
                      <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} style={{ color: "black" }} />
                    </button>
                  </div>

                  <input
                    type={passwordVisible ? "text" : "password"}
                    className="input"
                    placeholder="Confirmer mot de passe"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />

                  <button className="form-btn" type="submit">
                    S'inscrire
                  </button>
                </form>

                <p className="sign-up-label">
                  Vous avez déjà un compte ?{" "}
                  <Link to="/" className="sign-up-link">Connexion</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
