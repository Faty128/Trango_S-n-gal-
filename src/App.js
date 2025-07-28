import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Acceuil from "./pages/acceuil/Acceuil";
import Login from "./pages/auth/Login";
import ReservationForm from "./components/reservationform/ReservationForm";
import Navbar from "./components/navbar/Navbar";
import Register from "./pages/auth/Register";
import TicketCard from "./components/ticketcard/TicketCard";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/acceuil" element={<Acceuil />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reservationform" element={<ReservationForm />} />
          <Route path="/ticketcard" element={<TicketCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
