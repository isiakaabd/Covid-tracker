import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import image from 'components/assests/image.png';
import CardItem from 'components/layout/Card';
import error from 'components/assests/error.jpeg';
import SelectComponent from 'components/layout/SelectComponent';
import { fetchData, fetchDailyData, fetchCountries } from 'components/Fetch/server';
import Chart from 'components/layout/Chart';

const Index = () => {
  const [Data, setData] = useState(null);
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');

  const [DailyData, setDailyData] = useState([]);
  useEffect(() => {
    let isCancelled = false;
    const fetch = async () => {
      let response = await fetchData();
      if (!isCancelled) {
        setData(response);
      }
    };
    fetch();
    return () => {
      isCancelled = true;
    };
  }, []);

  //

  useEffect(() => {
    let isCancelled = false;
    const fetch = async () => {
      let response = await fetchDailyData();
      if (!isCancelled) {
        setDailyData(response);
      }
    };
    fetch();
    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    let isCancelled = false;
    const fetch = async () => {
      let response = await fetchCountries();
      if (!isCancelled) {
        setCountries(response);
      }
    };
    fetch();
    return () => {
      isCancelled = true;
    };
  }, []);

  const handleChange = async (country) => {
    let isCancelled = false;
    if (!isCancelled) {
      setCountry(country);
      const data = await fetchData(country.value);
      setData(data);
    }
  };

  //  the ApI have 200 for all status codes, to avoid throwing error when there's no network
  const NetworkError = 'Network Error';
  const TimeOutError = 'timeout exceeded';

  if (Data && countries && Data !== NetworkError && Data !== TimeOutError) {
    const { lastUpdate, confirmed, deaths, recovered } = Data;
    return (
      <Grid direction="column" container width="90%" margin="auto" rowSpacing={4}>
        <Grid item md={4} sm={10} margin="auto">
          <img src={image} style={{ width: '100%', objectFit: 'contain' }} />
        </Grid>
        <Grid item container rowSpacing={3} justifyContent="space-evenly">
          <CardItem name="Infected" lastUpdate={lastUpdate} data={confirmed} />
          <CardItem name="Deaths" lastUpdate={lastUpdate} data={deaths} />
          <CardItem name="Recovered" lastUpdate={lastUpdate} data={recovered} />
        </Grid>
        <Grid item container>
          <Grid item container md={4} margin="auto" justifyContent="center" sm={10}>
            <SelectComponent options={countries} handleChange={handleChange} />
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item container margin="auto" justifyContent="center">
            <Chart DailyData={DailyData} country={country} data={Data} />
          </Grid>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid container justifyContent="center">
        {Data === NetworkError ? (
          <Grid item container>
            <img
              src={error}
              style={{ height: '100vh', width: '100vw', overflow: 'hidden', objectFit: 'cover' }}
            />
          </Grid>
        ) : (
          <Grid item justifyContent="center">
            <Typography color="error" variant="h2" textAlign="center">
              Loading
            </Typography>
          </Grid>
        )}
      </Grid>
    );
  }
};
export default Index;