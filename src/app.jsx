import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import History from './pages/History';

const App = () => {
  return (
    <Router>
      {/* The Navbar component should appear on all pages */}
      <Navbar />
      
      <div style={{ paddingTop: '0px' }}> {/* Add padding-top if Navbar is sticky */}
        <Routes>
          {/* Route for Login page */}
          <Route path="/" element={<Login />} />
          
          {/* Route for Register page */}
          <Route path="/register" element={<Register />} />
          
          {/* Route for Dashboard page */}
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Route for History page */}
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
 