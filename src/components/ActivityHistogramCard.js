import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components with Chart.js
Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const ActivityHistogramCard = ({ activity }) => {
  const chartRef = useRef(null);

  // Chart configuration
  const labels = Object.keys(activity);
  const data = {
    labels,
    datasets: [
      {
        label: 'Activity Count',
        data: Object.values(activity),
        backgroundColor: '#4A90E2',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    // Destroy the chart instance if it already exists to prevent canvas reuse error
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(chartRef.current, {
      type: 'bar',
      data,
      options,
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data, options]);

  return (
    <div className="activity-histogram-card">
      <h3>Monthly Activity</h3>
      <Bar data={data} options={options} ref={chartRef} />
    </div>
  );
};

export default ActivityHistogramCard;
