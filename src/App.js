import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Acceuil from './pages/acceuil/Acceuil';
import Login from './pages/auth/Login';

function App() {
  return (
    <div >
      <Router>
      <Routes>
        <Route path="/" element={<Acceuil />} />
      <Route path="/login" element={<Login />} />
      </Routes>
</Router>
    </div>
  );
}

export default App;
