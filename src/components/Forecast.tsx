import {
  Box,
  Card,
  CardContent,
  Grid2 as Grid,
  Stack,
  Typography,
} from '@mui/material';
import { ForecastWeatherData } from '../types';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

interface Props {
  forecast: ForecastWeatherData;
}

const Forecast = ({ forecast }: Props) => {
  const options: object = { weekday: 'short', month: 'short', day: 'numeric' };
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString(undefined, options);
  };
  return (
    <>
      <Box mb={2}>
        <Typography variant="h5" mt={2}>
          {forecast.forecastday.length}-Day Forecast
        </Typography>
      </Box>
      <Grid container spacing={3} columns={{ xs: 12, sm: 8, md: 12 }}>
        {forecast.forecastday.map((fcDay, index) => (
          <Grid size={{ xs: 12, sm: 4 }} key={fcDay.date}>
            <Card variant="outlined">
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  {index === 0 ? 'Today' : formatDate(fcDay.date)}
                </Typography>
                <Stack direction="row" alignItems="center" spacing={1} my={2}>
                  <Box
                    component="img"
                    sx={{ width: 48, height: 48 }}
                    src={fcDay.day.condition.icon}
                    alt={fcDay.day.condition.text}
                  />
                  <Typography variant="body2" color="textSecondary">
                    {fcDay.day.condition.text}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Stack direction="row">
                    <ExpandLess color="primary" />
                    <Typography variant="body1" color="textSecondary">
                      {fcDay.day.maxtemp_c.toFixed()}°
                    </Typography>
                  </Stack>
                  <Box>
                    <Typography variant="h6">
                      <strong>{fcDay.day.avgtemp_c.toFixed()}°</strong>
                    </Typography>
                  </Box>
                  <Stack direction="row">
                    <ExpandMore color="secondary" />
                    <Typography variant="body1" color="textSecondary">
                      {fcDay.day.mintemp_c.toFixed()}°
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Forecast;
