import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTtnInfo } from 'helpers/getTtnInfo';

export const getTtnInfoThunk = createAsyncThunk('get ttn Info', async value => {
  const { data } = await getTtnInfo(value);
  return data;
});
