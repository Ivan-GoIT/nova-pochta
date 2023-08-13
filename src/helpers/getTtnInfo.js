import axios from 'axios';
import { BASE_URL, TRACKING } from 'constants/axios.constants';
import { cutTtnInfoFromResponse } from './cutTtnInfoFromResponse';


export const getTtnInfo = async (val) => {
  const res = await axios
    .post(BASE_URL, TRACKING(val))
    .then(cutTtnInfoFromResponse);
  return res;
};
