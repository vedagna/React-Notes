// src/pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Welcome to Your Dashboard</h2>
      <nav>
        <Link to="/profile">Profile</Link>
        <Link to="/notes">Notes</Link>
      </nav>
    </div>
  );
};

export default Dashboard;
