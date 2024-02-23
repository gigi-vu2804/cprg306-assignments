"use client";
import { useState } from "react";

export default function NewTask({ onAddTask }) {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [taskStatus, setStatus] = useState("Pending");

  const inputStyling =
    "p-2 border-amber-900 border-2 rounded-lg text-sm text-amber-900";

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTask({
      name: taskName,
      dueDate: dueDate,
      priority: priority,
      assignedTo: assignedTo,
      status: taskStatus,
    });
    setTaskName("");
    setDueDate("");
    setPriority("");
    setAssignedTo("");
    setStatus("");
  };

  return (
    <div className="ml-4 flex-1 flex flex-col items-center max-w-sm">
      <h3 className="text-orange-200 text-center underline">Add New Task</h3>
      <form
        onSubmit={handleSubmit}
        className="p-2 m-4 mt-2 bg-orange-200 max-w-sm w-full rounded-lg border-amber-800 border-4"
      >
        <div className="mb-2">
          <input
            required
            className={`w-full mt-3 ${inputStyling}`}
            type="text"
            placeholder="Task name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <input
            required
            className={`w-full ${inputStyling}`}
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className="mb-2 flex justify-between">
          <select
            required
            className={`w-full mr-2 ${inputStyling}`}
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="" disabled>
              Priority
            </option>
            <option value="1">Highest</option>
            <option value="2">High</option>
            <option value="3">Medium</option>
            <option value="4">Low</option>
          </select>
          <select
            required
            className={`w-full ${inputStyling}`}
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
          >
            <option value="" disabled>
              Assigned To
            </option>
            <option value="Alex">Alex</option>
            <option value="Jordan">Jordan</option>
            <option value="Casey">Casey</option>
            <option value="Taylor">Taylor</option>
          </select>
        </div>
        <button
          className="bg-amber-950 text-white rounded-lg w-full mt-4 py-2 px-4 font-semibold hover:bg-blue-500 transition duration-150 ease-in-out"
          type="submit"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}
