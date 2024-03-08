import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './authContext/index.jsx';
import GestionReservas from './Components/GestionDeReservas/index.jsx';
import Login from './Components/login/index.jsx';
import Register from './Components/Registro/index.jsx';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reservas" element={<GestionReservas />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
