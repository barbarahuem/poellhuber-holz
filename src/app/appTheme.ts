import { createTheme } from '@mui/material/styles';

const AppTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    primary: {
      main: '#276080',
    },
    secondary: {
      main: '#ad9068',
      light: '#d2c3ad',
    },
    text: {
      primary: '#171717',
      secondary: '#2d3133',
    },
    divider: '#ede3d5',
  },
  typography: {
    fontFamily: 'var(--font-geist-sans), Arial, sans-serif',
  },
});

export default AppTheme;