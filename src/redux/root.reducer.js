import { combineReducers } from "@reduxjs/toolkit";
import { ttnReducer } from "./ttn/ttn.slice";

export const rootReducer=combineReducers({
    ttn:ttnReducer,
})