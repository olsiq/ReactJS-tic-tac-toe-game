import { configureStore } from '@reduxjs/toolkit';
import { gameSlice } from './slice';

export const store = configureStore({
  reducer: gameSlice.reducer,
});
