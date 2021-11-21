import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { Typography, Grid } from '@mui/material';

const Chart = ({ DailyData, country, data: { confirmed, deaths, recovered } }) => {
  const data = {
    labels: DailyData.map(({ date }) => date),
    datasets: [
      {
        label: 'Infected',
        data: DailyData.map(({ confirmed }) => confirmed),
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
      {
        data: DailyData.map(({ deaths }) => deaths),
        label: 'Deaths',
        fill: true,
        borderColor: '#742774',
        backgroundColor: 'rgba(255,0,0,0.5)',
      },
    ],
  };
  const barData = {
    labels: ['Infected', 'Deaths', 'Recovered'],
    datasets: [
      {
        label: 'People',
        backgroundColor: ['rgba(75,192,192,0.2)', 'rgba(255,0,0,0.5)', 'rgba(0,255,0,1)'],
        data: [confirmed.value, deaths.value, recovered.value],
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };
  const options = {
    legend: { display: false },
    title: {
      display: true,
      text: `Current state in ${country.value}`,
    },
  };
  return (
    <>
      {DailyData.length && country.value ? (
        <Grid container justifyContent="center">
          <Typography variant="h5">{`Data value in ${country.value}`}</Typography>
          <Bar data={barData} options={options} />
        </Grid>
      ) : (
        <Line data={data} />
      )}
    </>
  );
};

Chart.propTypes = {
  DailyData: PropTypes.array.isRequired,
  country: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  data: PropTypes.object.isRequired,
};
export default Chart;
