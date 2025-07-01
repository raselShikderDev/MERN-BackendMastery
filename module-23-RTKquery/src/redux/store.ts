import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import todoSlice from "./features/todoSlice";
import userSlice from "./features/userSlice";
import { baseApi } from "./api/baseurl";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    todo: todoSlice,
    allUsers:userSlice,
    [baseApi.reducerPath]:baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
