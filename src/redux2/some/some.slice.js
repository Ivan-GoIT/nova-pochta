import { createSlice } from '@reduxjs/toolkit';
import { someInitState } from './some.init-state';
import { getTtnThunk } from './some.thunk';
import { STATUS } from '../../constants/status.constants';

const someSlice = createSlice({
  name: 'some',
  initialState: someInitState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTtnThunk.pending, state => {
        state.status = STATUS.loading;
      })
      .addCase(getTtnThunk.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        state.data = payload;
      })
      .addCase(getTtnThunk.rejected, state => {
        state.status = STATUS.error;
      });
  },
});

export const someReducer = someSlice.reducer;
