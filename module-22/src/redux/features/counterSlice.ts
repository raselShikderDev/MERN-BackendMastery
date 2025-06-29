import { createSlice } from "@reduxjs/toolkit";

interface ICounterState{
    count:number,
}

const initialState:ICounterState = {
    count:0
}

const counterslice = createSlice({
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

export const {increment, decrement} = counterslice.actions
export default counterslice.reducer;
