import { createSlice } from '@reduxjs/toolkit';

export const TodoSlice = createSlice({
  name: 'todo',
  initialState: {
    value: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    editTodo: (state, action) => {
      console.log(action);
      state.value[action.payload.index] = action.payload.task;
    },
  },
});

export const { addTodo, removeTodo, editTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
