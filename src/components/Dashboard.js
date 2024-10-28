import React from 'react';
import { useLocation } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const location = useLocation();
  const { user } = location.state;
  const xp = user.badges.length * 20; // Calculate XP based on badges

  return (
    <div className="dashboard">
      <h1>Welcome, {user.name}</h1>
      <p>Register Number: {user.registerNumber}</p>
      <p>Email: {user.email}</p>
      <div className="progress-bar">
        <div className="xp-bar" style={{ width: `${(xp / 5000) * 100}%` }}></div>
      </div>
      <p>XP: {xp} / 5000</p>
      <h3>Badges:</h3>
      <ul>
        {user.badges.map((badge, index) => (
          <li key={index}>{badge}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
