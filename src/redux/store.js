import { rootReducer } from './root-reduser';
import { rootInitState } from './root-initial-state';
import { configureStore } from '@reduxjs/toolkit';


export const store=configureStore({
    devTools:true,
    preloadedState:rootInitState,
    reducer:rootReducer,
})


