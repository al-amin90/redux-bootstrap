import TaskCard from "@/components/module/tasks/TaskCard";
import { selectFilter, selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";
import React from "react";

const Task: React.FC = () => {
  //   const [tasks, setTasks] = useState<string[]>([]);

  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);

  console.log("tasks", tasks);
  console.log("filter", filter);

  return (
    <div className="mx-auto rounded shadow">
      <h2 className="text-2xl font-bold mt-8">Task List</h2>
      <div className=" mt-5 space-y-5">
        {tasks.map((task) => (
          <TaskCard task={task} />
        ))}
      </div>
      <ul className="list-disc pl-5"></ul>
    </div>
  );
};

export default Task;
