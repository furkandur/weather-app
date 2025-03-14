import axios from 'axios';
import { Ipdata } from '../types';
import { ipdataApiKey } from '../constants';

if (!ipdataApiKey) {
  throw new Error('IPDATA_API_KEY is not defined');
}

const getIpdata = async () => {
  const { data } = await axios.get<Ipdata>(
    `https://api.ipdata.co?api-key=${ipdataApiKey}`
  );

  return data;
};

export default { getIpdata };
