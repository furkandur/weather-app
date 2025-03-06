import { Typography } from '@mui/material';
import { CurrentWeather } from '../types';

interface Props {
  currentWeather: CurrentWeather | null;
}

const HomePage = ({ currentWeather }: Props) => {
  if (currentWeather) {
    return (
      <div>
        <Typography variant="h2">{currentWeather.location.name}</Typography>
      </div>
    );
  }
};

export default HomePage;
