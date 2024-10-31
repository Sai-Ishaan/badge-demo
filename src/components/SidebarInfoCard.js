import React from 'react';
import './SidebarInfoCard.css';

const SidebarInfoCard = ({ user }) => (
  <div className="sidebar-info-card">
    <h2>{user.name}</h2>
    <p>Register Number: {user.registerNumber}</p>
    <p>Email: {user.email}</p>
  </div>
);

export default SidebarInfoCard;
