// SnakeHeatmapCard.js
import React, { useState, useEffect } from 'react';
import './SnakeHeatmapCard.css';

const SnakeHeatmapCard = ({ activity }) => {
  const gridSize = 12; // One cell per month
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  // Map each month to its activity level from the activity prop
  const monthActivityLevels = months.map(month => activity[month] || 0);

  // Define colors based on activity levels (0 = light green, higher levels = darker green)
  const getColorForActivity = (level) => {
    switch (level) {
      case 0: return '#d0f0c0'; // Lightest green
      case 1: return '#a8e6a3';
      case 2: return '#7fcf87';
      case 3: return '#56b86a';
      case 4: return '#3e9f5e';
      default: return '#2fa152'; // Darkest green for levels 5+
    }
  };

  // Initialize snake cells to represent each month in the grid
  const [snakeCells, setSnakeCells] = useState(months.map((_, i) => i));

  // Function to animate the snake moving through cells
  const moveSnake = () => {
    setSnakeCells((prev) => {
      let newSnake = [...prev];
      newSnake.push((newSnake[newSnake.length - 1] + 1) % gridSize);
      if (newSnake.length > 12) newSnake.shift();
      return newSnake;
    });
  };

  // Set up an interval to move the snake every 500ms
  useEffect(() => {
    const interval = setInterval(moveSnake, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="snake-heatmap-card">
      <h3>Snake Heatmap</h3>
      <div className="snake-grid">
        {Array.from({ length: gridSize }, (_, i) => {
          const isSnakeCell = snakeCells.includes(i); // Check if this cell is part of the "snake"
          const activityLevel = monthActivityLevels[i];
          const cellColor = isSnakeCell ? getColorForActivity(activityLevel) : '#444';

          return (
            <div
              key={i}
              className={`snake-cell ${isSnakeCell ? 'snake-body' : ''}`}
              style={{ backgroundColor: cellColor }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SnakeHeatmapCard;
