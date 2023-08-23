const { createSlice } = require('@reduxjs/toolkit');
const { officesInitState } = require('./offices.init-state');
const { STATUS } = require('constants/status.constants');
const { getOfficesAtCityThunk } = require('./offices.thunk');

const officesSlice = createSlice({
  name: 'offices',
  initialState: officesInitState,
  reducers: {
    addCitiInSateAction: (state, { payload }) => {
      console.log('officesSlice', payload);
      state.city = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getOfficesAtCityThunk.pending, state => {
        state.status = STATUS.loading;
      })
      .addCase(getOfficesAtCityThunk.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        state.offices = payload;
      })
      .addCase(getOfficesAtCityThunk.rejected, state => {
        state.status = STATUS.error;
      });
  },
});

export const officesReducer = officesSlice.reducer;
export const { addCitiInSateAction } = officesSlice.actions;
