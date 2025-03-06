import { Container } from '@mui/material';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { useEffect, useState } from 'react';
import { CurrentWeather, UserLocation } from './types';
import weatherService from './services/weather';
import ipdataService from './services/ipdata';

const App = () => {
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [weather, setWeather] = useState<CurrentWeather | null>(null);

  const getUserLocationByIp = async () => {
    try {
      const { latitude, longitude } = await ipdataService.getIpdata();
      setUserLocation({ latitude, longitude });
    } catch (error) {
      console.error('Failed to fetch user location by IP: ', error);
    }
  };

  useEffect(() => {
    const fetchWeather = async () => {
      if (!userLocation) {
        await getUserLocationByIp();
        return;
      }

      const location = `${userLocation.latitude.toString()},${userLocation.longitude.toString()}`;

      try {
        const weather = await weatherService.getCurrentWeather(location);
        setWeather(weather);
      } catch (error) {
        console.error('Failed to fetch weather data: ', error);
      }
    };

    if (!weather) {
      void fetchWeather();
    }
  }, [userLocation, weather]);
  return (
    <BrowserRouter>
      <Container>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage currentWeather={weather} />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
