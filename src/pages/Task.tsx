import React, { useState } from "react";

const Task: React.FC = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState<string[]>([]);

    const handleAddTask = () => {
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask("");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Task List</h2>
            <div className="flex mb-4">
                <input
                    type="text"
                    className="flex-1 border border-gray-300 rounded px-3 py-2 mr-2 focus:outline-none"
                    placeholder="Enter a task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={handleAddTask}
                >
                    Add
                </button>
            </div>
            <ul className="list-disc pl-5">
                {tasks.map((t, idx) => (
                    <li key={idx} className="py-1">{t}</li>
                ))}
            </ul>
        </div>
    );
};

export default Task;