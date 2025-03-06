import axios from 'axios';
import { CurrentWeather } from '../types';
import { weatherApiKey } from '../constants';

if (!weatherApiKey) {
  throw new Error('WEATHER_API_KEY is not defined');
}

const getCurrentWeather = async (location: string) => {
  const { data } = await axios.get<CurrentWeather>(
    `http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${location}&aqi=no`
  );

  return data;
};

export default { getCurrentWeather };
