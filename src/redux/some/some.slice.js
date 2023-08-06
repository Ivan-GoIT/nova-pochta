import { createSlice } from '@reduxjs/toolkit';
import { someInitState } from './some.init-state';
import { getTtnThunk } from './some.thunk';
import { STATUS } from '../../constants/status.constants';

const someSlice = createSlice({
  name: 'some',
  initialState: someInitState,
  reducers: {},
  extraReducers: {
    [getTtnThunk.pending]: state => {
      state.status = STATUS.loading;
    },
    [getTtnThunk.fulfilled]: (state,{payload}) => {
      state.status = STATUS.success;
      state.data=payload

    },
    [getTtnThunk.error]: state => {
      state.status = STATUS.error;
    },
  },
});

export const someReducer = someSlice.reducer;
