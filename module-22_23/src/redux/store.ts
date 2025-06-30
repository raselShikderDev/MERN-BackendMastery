import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import todoSlice from "./features/todoSlice";
import userSlice from "./features/userSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    todo: todoSlice,
    allUsers:userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
