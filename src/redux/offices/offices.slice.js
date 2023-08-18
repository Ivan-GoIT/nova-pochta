const { createSlice } = require('@reduxjs/toolkit');
const { officesInitState } = require('./offices.init-state');
const { STATUS } = require('constants/status.constants');
const { getOfficesAtCity } = require('./offices.thunk');

const officesSlice = createSlice({
  name: 'offices',
  initialState: officesInitState,
  reducers: {
    getCityAction: (state, { payload }) => {
      state.city = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getOfficesAtCity.pending, state => {
        state.status = STATUS.loading;
      })
      .addCase(getOfficesAtCity.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        state.offices = payload;
      })
      .addCase(getOfficesAtCity.rejected, state => {
        state.status = STATUS.error;
      });
  },
});

export const officesReducer = officesSlice.reducer;
export const { getCityAction } = officesSlice.actions;
