import { createSlice } from "@reduxjs/toolkit";

//create state as well
const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
