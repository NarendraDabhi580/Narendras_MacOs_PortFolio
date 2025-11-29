import { createSlice } from "@reduxjs/toolkit";
import { WINDOW_CONFIG,INITIAL_Z_INDEX } from "#constants";

const initialState = {
    windows:WINDOW_CONFIG,
    nextZIndex:INITIAL_Z_INDEX + 1,

}

export const windowSlice = createSlice({
    name:"windows",
    initialState,
    reducers:{
        openWindow:(state,action) => {
            const {windowKey,data} = action?.payload;

            const win = state?.windows[windowKey];

            if(!win) return;

            win.isOpen = true,
            win.zIndex = state?.nextZIndex,
            win.data = data ?? win.data
            state.nextZIndex++
        },
        closeWindow:(state,action) => {
            const {windowKey} = action?.payload;

            const win = state?.windows[windowKey];

            if(!win) return;

            win.isOpen = false,
            win.zIndex = INITIAL_Z_INDEX,
            win.data = null

        },
        focusWindow:(state,action) => {
            const {windowKey} = action?.payload;

            const win = state?.windows[windowKey];

            if(!win) return;

            win.zIndex = state.nextZIndex++
        },
    }
});

export const {openWindow,closeWindow,focusWindow} = windowSlice?.actions;
export default windowSlice.reducer;
