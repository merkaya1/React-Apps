import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    { id: 1, title: 'todo1', completed: false },
    { id: 2, title: 'todo2', completed: false },
    { id: 3, title: 'todo3', completed: false }
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: state.length + 1,
        title: action.payload.title,
        completed: false
      };
      state.push(newTodo);
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    completedTodo: (state, action) => {
      const index: number = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    }
  }
});

export const { addTodo, completedTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
