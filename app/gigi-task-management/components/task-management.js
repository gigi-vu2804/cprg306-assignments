import React, { useState } from "react";
import NewTask from "./new-task";
import PendingTask from "./pending-task";
import CompletedTask from "./completed-task";

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
  // const updateTaskStatus = (taskName, newStatus) => {
  //   setTasks(
  //     tasks.map((task) => {
  //       if (task.name === taskName) {
  //         return { ...task, status: newStatus };
  //       }
  //       return task;
  //     })
  //   );
  // };

  return (
    <>
      <div className="flex justify-between items-center w-full px-2 py-2">
        <h1 className="text-center text-3xl text-orange-200 font-bold flex-grow">
          Tasks Management
        </h1>
        <div></div>
      </div>
      <div>
        <NewTask onAddTask={addTask} />
      </div>
      <div className="flex flex-row gap-6 justify-center mt-8 mx-auto h-full w-full">
        <PendingTask
          tasks={tasks.filter((task) => task.status === "Pending")}
          onUpdateTaskStatus={updateTaskStatus}
          onDeleteTask={deleteTask}
        />
        <CompletedTask
          tasks={tasks.filter((task) => task.status === "Completed")}
          onDeleteTask={deleteTask}
          onUpdateTaskStatus={updateTaskStatus}
        />
      </div>
    </>
  );
}
