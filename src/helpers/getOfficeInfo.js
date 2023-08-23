import axios from 'axios';
import { BASE_URL, officesObjGenerator } from 'helpers/axios.params';
import { cutOfficeInfoFromResponse } from './cutOfficeInfoFromResponse';

export const getOfficeInfo = async city => {
  const res = await axios
    .post(BASE_URL, officesObjGenerator(city))
    .then(cutOfficeInfoFromResponse);

  return res;
};
