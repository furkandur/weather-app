import axios from 'axios';
import { WeatherData } from '../types';
import { weatherApiKey } from '../constants';

if (!weatherApiKey) {
  throw new Error('WEATHER_API_KEY is not defined');
}

const getCurrentWeather = async (location: string) => {
  const { data } = await axios.get<WeatherData>(
    `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${location}&days=7&aqi=no`
  );

  return data;
};

export default { getCurrentWeather };
