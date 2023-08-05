import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todo",
  initialState: {
    isLoading: false,
    todos: [],
    error: null,
    singleTodo: {},
  },
  reducers: {
    setLoading: (state, action = false) => {
      //   state.isLoading = action.payload?true:false;
      state.isLoading = action.payload ? true : false;
    },
    getAllTodos: (state, action) => {
      state.todos = action.payload;
    },
    deleteTodos: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    createTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
  },
});

export const { setLoading, getAllTodos, deleteTodos ,createTodo} = todosSlice.actions;
export default todosSlice.reducer;
