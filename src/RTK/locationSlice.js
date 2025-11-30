import { locations } from "#constants";
import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_LOCATION = locations.work;

const initialState = {
    activeLocation:DEFAULT_LOCATION,
}

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setActiveLocation:(state,action) => {
        const {location } = action.payload;

        if(location === "undefined") return; 

        state.activeLocation = location;
    },
    resetActiveLocation:(state,action) => {
        state.activeLocation = DEFAULT_LOCATION;
    }
  },
});

export const {setActiveLocation,resetActiveLocation} = locationSlice.actions;
export default locationSlice.reducer;
