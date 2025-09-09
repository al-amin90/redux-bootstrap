import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[],
    filter: 'all' | 'high'| 'medium' | 'low'
}

const initialState : InitialState = {
  tasks: [
    {
      id: "233",
      title: "Demo Task",
      description: "This is a demo task for testing purposes.",
      dueDate: "2024-07-01",
      isCompleted: false,
      priority: "high",
    },
    {
      id: "233",
      title: "Demo Task",
      description: "This is a demo task for testing purposes.",
      dueDate: "2024-07-01",
      isCompleted: false,
      priority: "high",
    },
  ],
  filter: 'all'
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => state.todo.tasks
export const selectFilter = (state: RootState) => state.todo.filter

export default taskSlice.reducer;
