// HeatmapCard.js
import React from 'react';

const HeatmapCard = ({ activity }) => {
  const months = Object.keys(activity);

  return (
    <div className="heatmap-card">
      <h3>Activity Heatmap</h3>
      <div className="heatmap-grid">
        {months.map((month, index) => (
          <div
            key={index}
            className={`heatmap-cell level-${activity[month]}`}
            title={`${month}: ${activity[month]} contributions`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeatmapCard;
