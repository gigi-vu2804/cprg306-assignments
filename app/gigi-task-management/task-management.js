import React, { useState } from "react";
import NewTask from "./new-task";
import PendingTask from "./pending-task";
import CompletedTask from "./completed-task.js";

export default function TaskManagement() {
  const [tasks, setTasks] = useState([
    {
      name: "Complete project report",
      dueDate: "2024-03-01",
      priority: 1,
      assignedTo: "Alex",
      status: "Pending",
    },
    {
      name: "Prepare for presentation",
      dueDate: "2024-03-05",
      priority: 2,
      assignedTo: "Jordan",
      status: "Completed",
    },
    {
      name: "Update website content",
      dueDate: "2024-03-10",
      priority: 3,
      assignedTo: "Casey",
      status: "Pending",
    },
    {
      name: "Review quarterly budget",
      dueDate: "2024-03-15",
      priority: 4,
      assignedTo: "Taylor",
      status: "Pending",
    },
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskName) => {
    setTasks(tasks.filter((task) => task.name !== taskName));
  };

  const updateTaskStatus = (taskName, newStatus) => {
    setTasks(
      tasks.map((task) => {
        if (task.name === taskName) {
          return { ...task, status: newStatus };
        }
        return task;
      })
    );
  };

  return (
    <div className="flex flex-row gap-6 justify-center mt-8 mx-auto h-full w-full">
      <NewTask onAddTask={addTask} />
      <PendingTask
        tasks={tasks.filter((task) => task.status === "Pending")}
        onUpdateTaskStatus={updateTaskStatus}
        onDeleteTask={deleteTask}
      />
      <CompletedTask
        tasks={tasks.filter((task) => task.status === "Completed")}
        onUpdateTaskStatus={updateTaskStatus}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}
