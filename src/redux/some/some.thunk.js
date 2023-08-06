import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTtnInfo } from '../../helpers/getTtnInfo';

export const getTtnThunk = createAsyncThunk('getTth', async (value) => {
  const { data } = await getTtnInfo(value);
  return data;
});
