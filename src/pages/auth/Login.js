// Login.js

import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../firebase/auth";
// import { useAuth } from "../../context/authContext"; // Assurez-vous d'importer useAuth depuis votre contexte
// import { auth, db } from "../../firebase/firebase"; // Assurez-vous d'importer correctement Firebase
import "./Login.css";
import { toast } from "react-toastify";

const Login = () => {
  //  const { userLoggedIn } = useAuth(); // Assurez-vous d'importer useAuth depuis votre contexte

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSigningIn(true);
    setErrorMessage("");
  };

  return (
    <div className="body">
      <Container>
        <Row>
          <Col lg={12} md={6}>
            <div className="d-flex justify-content-center">
              <div className="form-container">
                <p className="title" style={{ color: "black" }}>
                  Connectez-Vous
                </p>
                <form className="form">
                  <input type="email" className="input" placeholder="Email" />
                  <div className="password-container">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      className="input password-input"
                      placeholder="Password"
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={togglePasswordVisibility}
                    >
                      <FontAwesomeIcon
                        icon={passwordVisible ? faEyeSlash : faEye}
                        style={{ color: "black" }}
                      />
                    </button>
                  </div>
                  <p className="page-link">
                    <Link to="/forgot-password" className="sign-up-link">
                      Forgot Password?
                    </Link>
                  </p>

                  <Link to="/acceuil">
                    <button className="form-btn" type="submit">
                      Log in
                    </button>
                  </Link>
                </form>
                <p className="sign-up-label">
                  Don't have an account?
                  <Link to="/acceuil" className="sign-up-link">
                    Home
                  </Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
