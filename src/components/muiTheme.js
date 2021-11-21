import { createTheme } from '@mui/material/styles';
export const muiTheme = createTheme({
  typography: {
    fontFamily: ['"Euclid Circular"', '"Circular Std Medium"', 'Roboto', 'sans-serif'].join(','),
    htmlFontSize: 10,
    fontSize: 10,
  },
});
