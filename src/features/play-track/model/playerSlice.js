import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPlaying: false,
  isPlayerVisible: false
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    togglePlay(state) {
      state.isPlaying = !state.isPlaying;
    },
    setIsPlaying(state, action) {
      state.isPlaying = action.payload;
    },
    setPlayerVisibility(state, action) {
      state.isPlayerVisible = action.payload;
    },
  },
});

export const { 
  togglePlay, 
  setIsPlaying, 
  setPlayerVisibility 
} = playerSlice.actions;

export default playerSlice.reducer;
