import axios from 'axios';
import { BASE_URL, TRACKING } from '../constants/axios.constants';

const cutDataFromResponse = response => {
  const {
    Status: statusTtn,
    WarehouseSender: sender,
    WarehouseRecipient: recipient,
    CitySender: citySender,
  } = response.data.data[0];

  response.data = {
    statusTtn,
    sender,
    recipient,
    citySender,
  };
  return response;
};

export const getTtnInfo = async () => {
  const res = await axios.post(BASE_URL, TRACKING).then(cutDataFromResponse);
  return res;
};
