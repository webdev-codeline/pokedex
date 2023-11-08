import { configureStore } from '@reduxjs/toolkit';

import historiesSlice from './historySlice';
import visitSlice from './visitSlice';

export const store = configureStore({
  reducer: {
    visit: visitSlice,
    history: historiesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
