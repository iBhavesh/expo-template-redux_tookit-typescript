import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  count: number;
};

const initialState: InitialState = {
  count: 0,
};

const counter = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});

export const { decrement, increment } = counter.actions;
export default counter.reducer;
