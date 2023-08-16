import { configureStore } from '@reduxjs/toolkit';
import { rootInitState } from './root.init-state';
import { rootReducer } from './root.reducer';
import ttnMiddleware from './middleware/ttnMiddleware';

export const store = configureStore({
  devTools: true,
  preloadedState: rootInitState,
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(ttnMiddleware),
});
