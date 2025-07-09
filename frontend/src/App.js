import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import Profile from './Profile';

function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <BrowserRouter>
      <nav style={{ background: "#1976d2", padding: "1rem", textAlign: "center" }}>
        <a href="/login" style={{ color: "#fff", margin: "0 1rem" }}>Login</a>
        <a href="/register" style={{ color: "#fff", margin: "0 1rem" }}>Register</a>
        <a href="/dashboard" style={{ color: "#fff", margin: "0 1rem" }}>Dashboard</a>
        <a href="/profile" style={{ color: "#fff", margin: "0 1rem" }}>Profile</a>
      </nav>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;