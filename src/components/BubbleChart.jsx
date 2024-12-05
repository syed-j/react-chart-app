import React from 'react';
import ChartComponent from './ChartComponent';

const BubbleChart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: 'Sales, Expenses, and Profits',
        data: data.expenses.map((expense, index) => ({
          x: expense,
          y: data.profits[index],
          r: data.sales[index] / 25, 
        })),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return <ChartComponent type="bubble" data={chartData} />;
};

export default BubbleChart;