import {  combineReducers } from '@reduxjs/toolkit';
import { ttnReducer } from './ttn/ttn.reducer';
import { someReducer } from './some/some.slice';

export const rootReducer = combineReducers({
  ttn: ttnReducer,
  some: someReducer,
});
