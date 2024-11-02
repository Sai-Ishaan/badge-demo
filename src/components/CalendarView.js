// CalendarView.js
import React from 'react';
import './CalendarView.css';

const CalendarView = ({ activityData }) => {
  const daysInMonth = new Date().getDate(); // Get the number of days in the current month

  return (
    <div className="calendar-view">
      {[...Array(daysInMonth)].map((_, index) => {
        const day = index + 1;
        const activityLevel = activityData[day] || 0; // Retrieve activity level for each day
        return (
          <div
            key={day}
            className={`calendar-cell level-${activityLevel}`}
            title={`Day ${day}: ${activityLevel} activities`}
          >
            {day}
          </div>
        );
      })}
    </div>
  );
};

export default CalendarView;
