import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const Chart = ({ chartData }) => {
  return (
    <>
      <div style={{ maxWidth: '800px', minHeight: '400px', margin: '0 auto' }}>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: 'Category',
                fontSize: 20,
              },
              legend: {
                display: true,
                position: 'right',
              },
            },
            scales: {
              x: {
                ticks: {
                  font: {
                    size: 14,
                  },
                },
              },
              y: {
                ticks: {
                  font: {
                    size: 14,
                  },
                  stepSize: 5, // Ajusta este valor según tus necesidades
                },
              },
            },
          }}
        />
      </div>
    </>
  );
};
