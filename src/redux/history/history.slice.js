const { createSlice } = require('@reduxjs/toolkit');
const { historyInitState } = require('./history.init-state');

const historySlice = createSlice({
  name: 'history',
  initialState: historyInitState,
  reducers: {
    addTtnInHistoryAction: (state, { payload }) => {
      state.unshift(payload);
    },
    clearHistoryAction: state => {
      state.length=0;
    },
  },
});

export const { addTtnInHistoryAction, clearHistoryAction } =
  historySlice.actions;
export const historyReducer = historySlice.reducer;
