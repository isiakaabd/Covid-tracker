import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import { muiTheme } from './components/muiTheme';
ReactDOM.render(
  <ThemeProvider theme={muiTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
