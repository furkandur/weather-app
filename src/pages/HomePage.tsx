import { Paper, Typography } from '@mui/material';
import { CurrentWeather } from '../types';

interface Props {
  currentWeather: CurrentWeather | null;
}

const HomePage = ({ currentWeather }: Props) => {
  if (currentWeather) {
    return (
      <div>
        <Paper elevation={3} style={{ padding: '20px', width: 'fit-content' }}>
          <img
            src={currentWeather.current.condition.icon}
            alt={currentWeather.current.condition.text}
          />
          <Typography variant="h3" gutterBottom>
            {currentWeather.location.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {currentWeather.current.condition.text}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {currentWeather.current.temp_c}°C
          </Typography>
          <Typography variant="h5" gutterBottom>
            {currentWeather.current.humidity}%
          </Typography>
        </Paper>
      </div>
    );
  }
};

export default HomePage;
