// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
//   const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    // i18n.changeLanguage(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-warning px-4">
      <Link className="navbar-brand fw-bold text-dark" to="/">
        TranGo Sénégal
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/recherche" className="nav-link text-dark">
              {("Rechercher")}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/mestraget" className="nav-link text-dark">
              {("Mes trajets")}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin" className="nav-link text-dark">
              {("Admin")}
            </Link>
          </li>
          <li className="nav-item">
            <select
              className="form-select ms-3"
              onChange={handleLanguageChange}
              defaultValue={""}
              style={{ width: "100px" }}
            >
              <option value="fr">Français</option>
              <option value="wo">Wolof</option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
