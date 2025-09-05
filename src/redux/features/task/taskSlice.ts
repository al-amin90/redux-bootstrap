import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    task: ITask[]
}

const initialState : InitialState = {
  task: [
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
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
