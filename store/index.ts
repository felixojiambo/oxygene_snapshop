// store/store.ts

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import categoryReducer from './categorySlice'; // Import the category reducer

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    category: categoryReducer, // Add the category reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
