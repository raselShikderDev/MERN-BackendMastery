
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ICounterState{
    count:number,
}

const initialState:ICounterState = {
    count:0
}

export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment: (state, action:PayloadAction<number>)=>{
            state.count += action.payload
        },
        decrement: (state, action:PayloadAction<number>)=>{
            state.count -= action.payload
        }
    }
})

export const {increment, decrement} = counterSlice.actions

export default counterSlice.reducer