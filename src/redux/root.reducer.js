import { combineReducers } from "@reduxjs/toolkit";
import { ttnReducer } from "./ttn/ttn.slice";
import { historyReducer } from "./history/history.slice";
import { officesReducer } from "./offices/offices.slice";

export const rootReducer=combineReducers({
    ttn:ttnReducer,
    history:historyReducer,
    offices:officesReducer,
})