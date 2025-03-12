import { LocationOn } from '@mui/icons-material';
import { Box, Grid2 as Grid, Stack, Typography } from '@mui/material';
import { LocationWeatherData } from '../types';

interface Props {
  location: LocationWeatherData;
}

const WeatherLocation = ({ location }: Props) => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Grid container spacing={1}>
        <Grid size={12}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <LocationOn color="primary" />
            <Typography variant="h4">{location.name}</Typography>
          </Stack>
        </Grid>
        <Grid size={6}>
          <Typography variant="body1" color="textSecondary">
            {location.country}
          </Typography>
        </Grid>
      </Grid>

      <Box>
        <Typography variant="h6">{location.localtime.split(' ')[0]}</Typography>{' '}
        <Typography variant="body2" color="textSecondary">
          {location.localtime.split(' ')[1]}
        </Typography>
      </Box>
    </Stack>
  );
};

export default WeatherLocation;
