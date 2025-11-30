import { configureStore } from "@reduxjs/toolkit";
import windowReducer from "./windowSlice";
import locationReducer from "./locationSlice";

export const store = configureStore({
  reducer: {
    windows: windowReducer,
    locations:locationReducer,
  },
});
