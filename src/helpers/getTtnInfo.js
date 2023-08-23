import axios from 'axios';
import { BASE_URL, trackingObjGenerator } from 'helpers/axios.params';
import { cutTtnInfoFromResponse } from './cutTtnInfoFromResponse';

export const getTtnInfo = async ttnNunber => {
  const res = await axios
    .post(BASE_URL, trackingObjGenerator(ttnNunber))
    .then(cutTtnInfoFromResponse);
  return res;
};
