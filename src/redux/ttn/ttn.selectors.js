export const selectTtnInfo = state => {
  console.log('Selecting TTN info', state.info);
  return state.info;
};
export const selectTtnResStatus = state => state.status;
export const selectTtnNumber = state => state.ttn;
