import React from 'react';
import { useLocation } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const location = useLocation();
  const { user } = location.state || {};

  const calculateXP = (badges) => badges.length * 20;

  if (!user) {
    return <p>User not found. Please return to the home page.</p>;
  }

  const xp = calculateXP(user.badges);
  const progress = Math.min((xp / 100), 1) * 100; // Cap progress at 100%

  return (
    <div className="dashboard">
      <h1>Welcome, {user.name}!</h1>
      <p>Register Number: {user.registerNumber}</p>
      <p>Email: {user.email}</p>

      <div className="stats">
        <p>Badges Earned:</p>
        <ul>
          {user.badges.map((badge, index) => (
            <li key={index}>{badge}</li>
          ))}
        </ul>
        <p>Total XP: {xp}</p>
      </div>

      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default Dashboard;
