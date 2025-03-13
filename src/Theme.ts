import { alpha, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
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
              style: ({ theme }) => ({
                borderRadius: 10,
                backgroundColor: alpha(theme.palette.background.paper, 0.75),
              }),
            },
          ],
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: alpha(theme.palette.background.paper, 0.8),
        }),
      },
    },
  },
});

export default theme;
