import { configureStore } from '@reduxjs/toolkit';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';

import historySlice from './historySlice';
import visitSlice from './visitSlice';

const persistedVisitReducer = persistReducer({ key: 'visit', storage: AsyncStorage }, visitSlice);
const persistedHistoryReducer = persistReducer({ key: 'history', storage: AsyncStorage }, historySlice);

export const store = configureStore({
  reducer: {
    visit: persistedVisitReducer,
    history: persistedHistoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
