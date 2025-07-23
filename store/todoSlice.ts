import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TodoState {
  todos: string[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push(action.payload);
    },
    // Future actions (e.g., deleteTodo) can be added here
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
