// src/components/TemperatureChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const TemperatureChart = ({ data ,variables}) => {
  const colors = {
    temperature_2m_max: 'rgba(255, 99, 132, 0.5)',
    temperature_2m_min: 'rgba(54, 162, 235, 0.5)',
    temperature_2m_mean: 'rgba(75, 192, 192, 0.5)',
    apparent_temperature_max: 'rgba(153, 102, 255, 0.5)',
    apparent_temperature_min: 'rgba(255, 159, 64, 0.5)',
    apparent_temperature_mean: 'rgba(255, 205, 86, 0.5)',
    sunrise: 'rgba(255, 105, 86, 0.5)',
    sunset: 'rgba(255, 95, 86, 0.5)',
    daylight_duration: 'rgba(255, 205, 186, 0.5)',
    sunshine_duration: 'rgba(255, 205, 186, 0.5)',
    weather_code: 'rgba(25, 205, 86, 0.5)',

  };
  const chartData = {
    labels: data.time,
    datasets: variables.map(variable => ({
      label: variable,
      data: data[variable],
      borderColor: colors[variable],
      backgroundColor: colors[variable],
    })),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Temperature vs Time',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Temperature (°C)',
        },
        beginAtZero: true,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default TemperatureChart;
