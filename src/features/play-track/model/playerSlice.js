import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPlayerVisible: false
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlayerVisibility(state, action) {
      state.isPlayerVisible = action.payload;
    },
  },
});

export const { setPlayerVisibility } = playerSlice.actions;

export default playerSlice.reducer;
