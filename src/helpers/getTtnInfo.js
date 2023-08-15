import axios from 'axios';
import { BASE_URL, officesObjGenerator } from 'helpers/axios.params';
import { cutTtnInfoFromResponse } from './cutTtnInfoFromResponse';


export const getTtnInfo = async (city) => {
  const res = await axios
    .post(BASE_URL, officesObjGenerator(city))
    .then(cutTtnInfoFromResponse);
  return res;
};
