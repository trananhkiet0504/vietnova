import { configureStore } from '@reduxjs/toolkit';

import { foodDetailedApi } from '../features/food/api';

export const store = configureStore({
  reducer: {
    [foodDetailedApi.reducerPath]: foodDetailedApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(foodDetailedApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
