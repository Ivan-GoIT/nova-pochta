const { createSlice } = require('@reduxjs/toolkit');
const { ttnInitState } = require('./ttn.init-state');
const { getTtnInfoThunk } = require('./ttn.thunk');
const { STATUS } = require('constants/status.constants');

const ttnSlice = createSlice({
  name: 'ttn',
  initialState: ttnInitState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTtnInfoThunk.pending, state => {
        state.status = STATUS.loading;
      })
      .addCase(getTtnInfoThunk.fulfilled, (state,{payload}) => {
        state.status = STATUS.success;
        state.info=payload
      })
      .addCase(getTtnInfoThunk.rejected, state => {
        state.status = STATUS.error;
      });
  },

});

export const ttnReducer=ttnSlice.reducer