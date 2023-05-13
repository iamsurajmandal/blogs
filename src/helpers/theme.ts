import { createTheme } from '@mui/material/styles';
import {green, grey}  from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      light: grey[900],
      main: green[800],
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: grey[50],
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    }
  },
});

export default theme;