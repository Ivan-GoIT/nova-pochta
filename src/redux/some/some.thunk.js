import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTtnInfo } from '../../helpers/getTtnInfo';

export const getTtnThunk = createAsyncThunk('getTth', async () => {
  const { data } = await getTtnInfo();
  return data;
});
