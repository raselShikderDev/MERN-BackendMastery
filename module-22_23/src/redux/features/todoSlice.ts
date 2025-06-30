import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ITask } from "../types";
import type { RootState } from "../store";

interface IinitialState {
  tasks: ITask[];
  filter:"All" | "Normal" | "Medium" | "High";
}

const initialState: IinitialState = {
  tasks: [],
  filter:"All"
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action:PayloadAction<ITask>) => {
      console.log(action.payload);
      state.tasks.push(action.payload)
    },
  },
});


export const selectorTasks =(state:RootState)=>{
    return state.todo.tasks
}
export const selectorFilter =(state:RootState)=>{
    return state.todo.filter
}

export const { addTask } = todoSlice.actions;


export default todoSlice.reducer;
