import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Header from "./components/header";
import Profile from "./components/userProfile/index";
import { AuthProvider } from "./contexts/authContext";

function App() {
  return (
    <AuthProvider>
        <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Profile />} />
          </Routes>
    </AuthProvider>
  );
}

export default App;
