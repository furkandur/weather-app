import { Box, Grid2 as Grid, Paper, Stack, Typography } from '@mui/material';
import { CurrentWeatherData } from '../types';
import { Air, Opacity, Thermostat, Visibility } from '@mui/icons-material';

interface Props {
  current: CurrentWeatherData;
}

const CurrentWeather = ({ current }: Props) => {
  return (
    <Paper variant="outlined" sx={{ p: 3, height: '100%' }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box>
              <Box
                component="img"
                sx={{
                  height: 64,
                  width: 64,
                }}
                src={current.condition.icon}
                alt={current.condition.text}
              />
            </Box>
            <Box>
              <Typography variant="h2">{current.temp_c.toFixed()}°C</Typography>
              <Typography variant="body1">{current.condition.text}</Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack direction="row" spacing={1} mb={1}>
            <Opacity color="primary" fontSize="small" />
            <Typography variant="body1">
              Humidity: {current.humidity}%
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} mb={1}>
            <Air color="primary" fontSize="small" />
            <Typography variant="body1">
              Wind: {current.wind_kph} km/h
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} mb={1}>
            <Visibility color="primary" fontSize="small" />
            <Typography variant="body1">
              Visibility: {current.vis_km} km
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Thermostat color="primary" fontSize="small" />
            <Typography variant="body1">
              Feels like: {current.feelslike_c}°C
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CurrentWeather;
