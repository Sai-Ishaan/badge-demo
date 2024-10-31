import React from 'react';
import './ProgressCard.css';

const ProgressCard = ({ badges }) => {
  const participationProgress = badges.includes('Participation') ? 100 : 0;
  const contributionProgress = badges.includes('Contributor') ? 100 : 0;

  return (
    <div className="progress-card">
      <h3>Progress</h3>
      <div className="progress-bar">
        <span>Event Participation</span>
        <div className="progress">
          <div
            className="progress-value participation"
            style={{ width: `${participationProgress}%` }}
          ></div>
        </div>
      </div>
      <div className="progress-bar">
        <span>Event Contribution</span>
        <div className="progress">
          <div
            className="progress-value contribution"
            style={{ width: `${contributionProgress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
