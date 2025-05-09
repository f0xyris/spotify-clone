import { configureStore } from '@reduxjs/toolkit'
import trackReducer from "@features/play-track/model/trackSlice"
import playerReducer from "@features/play-track/model/playerSlice"

export const store = configureStore({
  reducer: {
    player: playerReducer,
    track: trackReducer
  },
})