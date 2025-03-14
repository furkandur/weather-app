import axios from 'axios';
import { Locator } from '../types';

const getLocators = async (query: string) => {
  const { data } = await axios.get<Locator[]>(
    `https://www.accuweather.com/web-api/autocomplete?query=${query}&language=en-us`
  );

  return data;
};

export default { getLocators };
