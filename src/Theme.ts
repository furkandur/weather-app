import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    background: { default: '#f5f5f5' },
  },
  typography: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    h2: { fontWeight: 700, letterSpacing: '-1px' },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
  },
  components: {
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: 'outlined' },
              style: {
                borderRadius: 10,
              },
            },
          ],
        },
      },
    },
  },
});

export default theme;
