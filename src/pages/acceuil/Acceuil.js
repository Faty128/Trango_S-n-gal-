import React from 'react';
import './acceuil.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import SeatSelector from '../../components/seatselector/SeatSelector';
import { Link, useNavigate } from "react-router-dom";


function Acceuil() {
  const gares = [
    { ville: "Dakar", lat: 14.6928, lon: -17.4467 },
    { ville: "Thiés", lat: 14.9081, lon: -16.9500 },
    { ville: "Touba", lat: 14.8667, lon: -15.9833 },
    { ville: "Saint-Louis", lat: 16.0110, lon: -16.4900 },
    { ville: "Diourbel", lat: 14.6667, lon: -15.7167 },
    { ville: "Matam", lat: 15.6000, lon: -13.4000 },
    { ville: "Kaolack", lat: 14.1500, lon: -16.1000 },
    { ville: "Fatick", lat: 14.2000, lon: -16.5000 },
    { ville: "Tambacounda", lat: 13.7500, lon: -13.7500 },
    { ville: "Ziguinchor", lat: 12.5833, lon: -16.2667 }
  ];
    const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Bienvenue sur <span className="text-primary">Trango Sénégal</span></h1>
        <p className="lead">Réservez vos trajets en toute simplicité</p>
      </div>

      <div className="row mb-4 g-4">
        <div className="col-lg-6">
          <MapContainer center={[14.6928, -17.4467]} zoom={7} style={{ height: "400px", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {gares.map((gare, index) => (
              <Marker key={index} position={[gare.lat, gare.lon]}>
                <Popup>{gare.ville}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        <div className="col-lg-6">
          <form className="card p-4 shadow-sm">
            <div className="mb-3">
              <label className="form-label">Ville de départ</label>
              <select className="form-select">
                {gares.map((gare, i) => (
                  <option key={i}>{gare.ville}</option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Date et heure de départ</label>
              <input type="datetime-local" className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label">Type de véhicule</label>
              <select className="form-select">
                <option>Car rapide</option>
                <option>Ndiaga Ndiaye</option>
                <option>Taxi</option>
              </select>
            </div>

            <div className="mb-3 form-check">
              <input className="form-check-input" type="checkbox" id="clim" />
              <label className="form-check-label" htmlFor="clim">Climatisation</label>
            </div>

            <div className="mb-3 form-check">
              <input className="form-check-input" type="checkbox" id="wifi" />
              <label className="form-check-label" htmlFor="wifi">Wi-Fi</label>
            </div>

            <button className="btn btn-primary w-100">Rechercher</button>
          </form>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Dakar → Touba</h5>
          <p className="card-text">Départ : 12 Août à 08h00</p>
          <p className="card-text">Type : Ndiaga Ndiaye | Climatisation : Oui</p>
          <p className="card-text">Prix : 2500 FCFA (3000 FCFA en heure de pointe)</p>
          <p className="card-text">Places restantes : 5</p>
          
          <button className="btn btn-success reservbutton">
            <Link to="/reservationform" className="sign-up-link"> Réserver </Link>
          </button>
        </div>
      </div>

      <div className="reservation-section">
        <h2 className="mb-3">Réserver vos places</h2>
        <SeatSelector />
      </div>
    </div>
  );
}

export default Acceuil;
