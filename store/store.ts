import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    todo: todoReducer,
    user: userReducer,
  },
});

// Infer types for the store's root state and dispatch function
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
