import { Container, Grid2 as Grid } from '@mui/material';
import CurrentWeather from '../components/CurrentWeather';
import { WeatherData } from '../types';
import WeatherLocation from '../components/WeatherLocation';
import DailyTemp from '../components/DailyTemp';
import Forecast from '../components/Forecast';
import HourlyChart from '../components/HourlyChart';

interface Props {
  weather: WeatherData | null;
}

const HomePage = ({ weather }: Props) => {
  if (weather) {
    return (
      <Container maxWidth="lg">
        <Grid container spacing={3} my={4}>
          <Grid size={12}>
            <WeatherLocation location={weather.location} />
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <CurrentWeather current={weather.current} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <DailyTemp forecast={weather.forecast} />
          </Grid>
          <Grid size={12}>
            <HourlyChart
              location={weather.location}
              forecast={weather.forecast}
            />
          </Grid>
          <Grid size={12}>
            <Forecast forecast={weather.forecast} />
          </Grid>
        </Grid>
      </Container>
    );
  }
};

export default HomePage;
