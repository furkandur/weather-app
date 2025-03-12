import { Divider, Paper, Typography } from '@mui/material';
import { ForecastWeatherData } from '../types';

interface Props {
  forecast: ForecastWeatherData;
}

const DailyTemp = ({ forecast }: Props) => {
  const today = forecast.forecastday[0].day;

  const options: object = { weekday: 'long', month: 'long', day: 'numeric' };
  const todayDate = new Date(forecast.forecastday[0].date).toLocaleDateString(
    undefined,
    options
  );

  return (
    <Paper variant="outlined" sx={{ p: 3, height: '100%' }}>
      <Typography variant="h6" mb={2}>
        Today's Forecast
      </Typography>
      <Typography variant="body1">
        <strong>High: </strong>
        {today.maxtemp_c}°C
      </Typography>
      <Typography variant="body1">
        <strong>Low: </strong>
        {today.mintemp_c}°C
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="body2" color="textSecondary">
        {todayDate}
      </Typography>
    </Paper>
  );
};

export default DailyTemp;
