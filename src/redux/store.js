import { configureStore } from '@reduxjs/toolkit';
import { rootInitState } from './root.init-state';
import { rootReducer } from './root.reducer';
import { officesMiddleware, ttnMiddleware } from './middleware';

export const store = configureStore({
  devTools: true,
  preloadedState: rootInitState,
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(ttnMiddleware,officesMiddleware),
});
