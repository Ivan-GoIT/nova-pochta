import { configureStore } from "@reduxjs/toolkit";
import { rootInitState } from "./root.init-state";
import { rootReducer } from "./root.reducer";

export const store=configureStore({
    devTools:true,
    preloadedState:rootInitState,
    reducer:rootReducer,
})