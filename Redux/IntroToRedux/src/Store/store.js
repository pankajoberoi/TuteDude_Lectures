import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Feature/todoslice";

export const store = configureStore({
  reducer: {
    dailyTodos: todoReducer,
  },
});
