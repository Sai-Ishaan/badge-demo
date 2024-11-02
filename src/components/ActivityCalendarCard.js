import React, { useState, useEffect } from 'react';
import './ActivityCalendarCard.css';

const ActivitySnakeHeatmapCard = ({ activity }) => {
  const gridSize = 12; 
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const monthActivityLevels = months.map(month => activity[month] || 0);

  const getColorForActivity = (level) => {
    switch (level) {
      case 0: return '#d0f0c0'; 
      case 1: return '#a8e6a3';
      case 2: return '#7fcf87';
      case 3: return '#56b86a';
      case 4: return '#3e9f5e';
      default: return '#2fa152'; 
    }
  };

  const [snakeCells, setSnakeCells] = useState(months.map((_, i) => i));

  const moveSnake = () => {
    setSnakeCells((prev) => {
      let newSnake = [...prev];
      newSnake.push((newSnake[newSnake.length - 1] + 1) % gridSize);
      if (newSnake.length > 12) newSnake.shift();
      return newSnake;
    });
  };

  useEffect(() => {
    const interval = setInterval(moveSnake, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="activity-snake-heatmap-card">
      <h3>Monthly Activity Heatmap</h3>
      <div className="heatmap-grid">
        {months.map((month, i) => {
          const isSnakeCell = snakeCells.includes(i); // Check if this cell is part of the "snake"
          const activityLevel = monthActivityLevels[i];
          const cellColor = isSnakeCell ? getColorForActivity(activityLevel) : '#444';
          
          return (
            <div
              key={month}
              className={`heatmap-cell ${isSnakeCell ? 'snake-body' : ''}`}
              style={{ backgroundColor: cellColor }}
              title={`${month}: ${activityLevel} events`}
            >
              {month.substring(0, 3)} {/* Show abbreviated month name */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivitySnakeHeatmapCard;
