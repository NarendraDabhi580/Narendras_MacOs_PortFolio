import { configureStore } from "@reduxjs/toolkit";
import windowReducer from "./windowSlice";

export const store = configureStore({
  reducer: {
    windows: windowReducer,
  },
});
