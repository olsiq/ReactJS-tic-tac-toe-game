import { configureStore } from '@reduxjs/toolkit';
import game from './slice';
export const store = configureStore({
  reducer: { game },
});
