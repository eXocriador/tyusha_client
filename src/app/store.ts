import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // Додайте редюсери тут
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
