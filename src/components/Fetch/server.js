const url = 'https://covid19.mathdro.id/api';
import axios from 'axios';

const defaultValue = {
  value: '',
  label: 'global',
};

export const fetchData = async (country) => {
  let newUrl = url;
  if (country) newUrl = `${url}/countries/${country} `;
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(newUrl);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

// Daily Data
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((daily) => ({
      confirmed: daily.totalConfirmed,
      recovered: daily.totalRecovered,
      deaths: daily.deaths.total,
      date: daily.reportDate,
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(`${url}/countries`);

    const countries = await data.countries.map((country) => ({
      value: country.name,
      label: country.name,
    }));

    return [defaultValue, ...countries];
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
