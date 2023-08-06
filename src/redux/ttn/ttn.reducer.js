import { ttnInitState } from "./ttn.init-state";

export const ttnReducer = (state = ttnInitState, action) => {
  if (action.type === 'TTN_TO_STATE') {
    return action.payload;
  }
  return state;
};
