import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./features/counterSlice";
import  todoSlice  from "./features/todoSlice";


const store = configureStore({
     reducer: {
          counter:counterSlice,
          todo:todoSlice
     },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store