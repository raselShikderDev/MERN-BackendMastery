import { createSlice } from "@reduxjs/toolkit";
import type { ITask } from "../types";
import type { RootState } from "../store";

interface IinitialState {
  tasks: ITask[];
  filter:"All" | "Normal" | "Medium" | "High";
}

const initialState: IinitialState = {
  tasks: [
    
    {
      id: "this is ID 01",
      title: "This is title 01",
      description: "This is the description",
      dueDate: "2025-06-27",
      isComplete: false,
      priority: "Normal",
    },
    {
      id: "this is ID 02",
      title: "This is title 02",
      description: "This is the description",
      dueDate: "2025-06-27",
      isComplete: false,
      priority: "Medium",
    },
    {
      id: "this is ID 03",
      title: "This is title 03",
      description: "This is the description",
      dueDate: "2025-06-27",
      isComplete: false,
      priority: "High",
    },
  ],
  filter:"All"
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // addTask: (state) => {
    //   state.tasks = state.tasks[0];
    // },
  },
});

// export const { addTask } = todoSlice.actions;

export const selectorTasks =(state:RootState)=>{
    return state.todo.tasks
}
export const selectorFilter =(state:RootState)=>{
    return state.todo.filter
}

export default todoSlice.reducer;
