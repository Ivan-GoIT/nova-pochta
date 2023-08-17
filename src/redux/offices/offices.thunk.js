import { createAsyncThunk } from '@reduxjs/toolkit';
import { getOfficeInfo } from 'helpers/getOfficeInfo';

export const getOfficesAtCity = createAsyncThunk(
  'get offices at city',
  async city => {
    const { data } = await getOfficeInfo(city);
    return data;
  }
);
