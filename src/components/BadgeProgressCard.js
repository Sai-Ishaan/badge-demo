// BadgeProgressCard.js
import React from 'react';

const BadgeProgressCard = ({ badges }) => {
  const badgeTypes = {
    Contributor: 100, // Max XP for the Contributor badge
    Participation: 100, // Max XP for the Participation badge
  };

  return (
    <div className="badge-progress-card">
      <h3>Badge Progress</h3>
      {badges.includes("Contributor") && (
        <div className="progress-bar">
          <p>Contributor Badge</p>
          <div className="progress">
            <div className="progress-fill" style={{ width: `${badgeTypes.Contributor}%` }} />
          </div>
        </div>
      )}
      {badges.includes("Participation") && (
        <div className="progress-bar">
          <p>Participation Badge</p>
          <div className="progress">
            <div className="progress-fill" style={{ width: `${badgeTypes.Participation}%` }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BadgeProgressCard;
