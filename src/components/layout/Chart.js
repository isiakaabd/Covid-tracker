import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
// import { Roundnumber } from 'components/Fetch/server';

const Chart = ({ DailyData, country, data: { confirmed, deaths, recovered } }) => {
  const theme = useTheme();
  const breakpoint = theme.breakpoints.down('md');

  const data = {
    labels: DailyData.map(({ date }) => date),
    datasets: [
      {
        label: 'Infected',
        // data: DailyData.map((i) => {
        //   console.log(Roundnumber(i.confirmed));
        //   return Roundnumber(i.confirmed);
        // }),
        data: DailyData.map(({ confirmed }) => confirmed),
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        fontSize: 32,
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
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          font: {
            size: breakpoint ? 15 : 12,
            family: 'cursive',
            lineHeight: 2,
          },
        },

        title: {
          display: true,
          text: country.value ? `Data value in ${country.value}` : `Global Corona virus cases`,
          font: {
            size: 26,
            family: 'Euclid Circular',
          },
        },
      },
    },
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

  return (
    <div id="chart-container" style={{ height: '50rem', width: '100%' }}>
      {DailyData.length && country.value ? (
        <Bar options={options} data={barData} />
      ) : (
        <Line options={options} data={data} />
      )}
    </div>
  );
};

Chart.propTypes = {
  DailyData: PropTypes.array.isRequired,
  country: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  data: PropTypes.object.isRequired,
};
export default Chart;
