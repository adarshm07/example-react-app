import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./Cart";
import counterReducer from "./Counter";

// Create the store
export const store = configureStore({
  reducer: {
    // cart: cartReducer,
    counter: counterReducer,
  },
});
