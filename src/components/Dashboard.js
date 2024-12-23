// Dashboard.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import SidebarInfoCard from './SidebarInfoCard';
import ActivityCalendarCard from './ActivityCalendarCard';
import SnakeHeatmapCard from './SnakeHeatmapCard';
import BadgeProgressCard from './BadgeProgressCard';
import BadgeCard from './BadgeCard';
import './Dashboard.css';

const Dashboard = () => {
  const location = useLocation();
  const { user } = location.state;

  return (
    <div className="dashboard-container">
      <SidebarInfoCard user={user} />
      <div className="dashboard-content">
        <ActivityCalendarCard activity={user.activity} />
        <BadgeProgressCard badges={user.badges} />
        <BadgeCard badges={user.badges} />
      </div>
    </div>
  );
};

export default Dashboard;
