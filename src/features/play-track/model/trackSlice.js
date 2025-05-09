import { createSlice } from "@reduxjs/toolkit";

export const trackSlice = createSlice({
    name: "track",
    initialState: {
        selectedTrack: null, 
    },
    reducers: {
        setTrack: (state, action) => {
            state.selectedTrack = action.payload
        }
    }
})

export const { setTrack } = trackSlice.actions
export default trackSlice.reducer