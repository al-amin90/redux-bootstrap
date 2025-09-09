"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ITask } from "@/types";

interface TaskCardProps {
  task: ITask;
  onToggleComplete?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const TaskCard = ({ task, onToggleComplete, onDelete }: TaskCardProps) => {
  return (
    <Card className="w-full max-w-md mx-auto shadow-lg rounded-2xl">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle
            className={`text-lg font-semibold ${
              task.isCompleted ? "line-through text-gray-400" : ""
            }`}
          >
            {task.title}
          </CardTitle>
          <Badge
            variant={
              task.priority === "high"
                ? "destructive"
                : task.priority === "medium"
                ? "default"
                : "secondary"
            }
          >
            {task.priority}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-gray-600">{task.description}</p>
        <p className="text-xs text-gray-500 mt-2">Due: {task.dueDate}</p>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button
          size="sm"
          variant={task.isCompleted ? "secondary" : "default"}
          onClick={() => onToggleComplete?.(task.id)}
        >
          {task.isCompleted ? "Undo" : "Complete"}
        </Button>
        <Button
          size="sm"
          variant="destructive"
          onClick={() => onDelete?.(task.id)}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TaskCard;
