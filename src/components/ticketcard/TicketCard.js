import React from 'react';
import './TicketCard.css'; // Import custom styles if needed
const TicketCard = ({ ticket }) => {
  if (!ticket) {
    return (
      <div className="container mt-5 text-center">
        <div className="alert alert-warning">Aucun ticket à afficher.</div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 rounded">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h4 className="text-primary">🎫 Ticket de Réservation</h4>
            <p><strong>Nom :</strong> {ticket.nom}</p>
            <p><strong>Numéro :</strong> {ticket.numero}</p>
            <p><strong>Trajet :</strong> {ticket.depart} → {ticket.arrivee}</p>
            <p><strong>Date :</strong> {ticket.date}</p>
            <p><strong>Heure :</strong> {ticket.heure}</p>
            <p><strong>Siège :</strong> {ticket.siege}</p>
            <p><strong>Prix :</strong> {ticket.prix} FCFA</p>
          </div>

          <div className="col-md-4 text-center">
            <img
              src={ticket.qrCodeUrl || 'https://api.qrserver.com/v1/create-qr-code/?data=ExempleTicket'}
              alt="QR Code"
              className="img-fluid"
              style={{ maxWidth: '150px' }}
            />
            <p className="mt-2 text-muted">Scannez pour valider</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
