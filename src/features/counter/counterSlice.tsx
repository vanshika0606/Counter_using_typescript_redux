import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

type initial = {
  count: number; 
};

const initialState: initial = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
       state.count = state.count + 1
    },
    decrement: (state) => {
        state.count = state.count - 1
    },
    reset: (state) => {
        state.count = 0
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
        state.count = state.count + action.payload;
    }
  },
});

export default counterSlice;
export const { decrement, increment, reset, incrementByValue} = counterSlice.actions;
