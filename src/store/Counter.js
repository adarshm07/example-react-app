import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the counter
const initialState = {
    count: 0,
  };
  
  // Create the counter slice
  const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
      increment: (state) => {
        state.count += 1;
      },
      decrement: (state) => {
        state.count -= 1;
      },
    },
  });
  
  // Extract the actions and the reducer from the counter slice
  export const { increment, decrement } = counterSlice.actions;
  export default counterSlice.reducer;