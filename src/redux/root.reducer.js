import { combineReducers } from "@reduxjs/toolkit";
import { ttnReducer } from "./ttn/ttn.slice";
import { historyReducer } from "./history/history.slice";

export const rootReducer=combineReducers({
    ttn:ttnReducer,
    history:historyReducer,
})