import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { ITask } from "../types";
import type { RootState } from "../store";

interface IinitialState {
  tasks: ITask[];
  filter: "All" | "Normal" | "Medium" | "High";
}

const initialState: IinitialState = {
  tasks: [],
  filter: "All",
};

type draftTask = Pick<ITask, "title" | "priority" | "dueDate" | "description">;

const createTask = (taskData: draftTask) => {
  return { id: nanoid(), isComplete: false, ...taskData };
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<draftTask>) => {
      const ultimateData: ITask = createTask(action.payload);
      state.tasks.push(ultimateData);
    },
    toggoleIsCompleted: (state, action: PayloadAction<string>) => {
      const updatedTask = state.tasks.find(
        (task) => task.id === action.payload
      );
      if (updatedTask) {
        updatedTask.isComplete = !updatedTask.isComplete;
      }
    },
    taskDelete: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    taskUpdate: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    taskFilter:(state, action: PayloadAction<"All" | "Normal" | "Medium" | "High">)=>{
      state.filter = action.payload
    }
  },
});

export const selectorTasks = (state: RootState) => {
  const filter = state.todo.filter;
  if(filter === "Normal"){
    return state.todo.tasks.filter((task)=>task.priority === "Normal")
  } else if(filter === "Medium"){
    return state.todo.tasks.filter((task)=>task.priority === "Medium")
  } else if(filter === "High"){
    return state.todo.tasks.filter((task)=>task.priority === "High")
  } else {
    return state.todo.tasks
  }
};
export const selectorFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask, toggoleIsCompleted, taskDelete, taskUpdate, taskFilter } = todoSlice.actions;
export default todoSlice.reducer;
