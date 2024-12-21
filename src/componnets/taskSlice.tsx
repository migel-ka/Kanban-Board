import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: string; 
  title: string;
  description: string;
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
  },
});

export const { addTask } = taskSlice.actions;
export const selectTasks = (state: { tasks: TaskState }) => state.tasks.tasks;
export default taskSlice.reducer;
