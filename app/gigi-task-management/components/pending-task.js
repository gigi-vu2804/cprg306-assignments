export default function PendingTask({
  tasks,
  onDeleteTask,
  onUpdateTaskStatus,
}) {
  const taskBoxStyling = "p-2 mx-4 mt-2 mb-4 bg-orange-200 max-w-lg rounded-lg";
  const taskNameStyling = "text-base font-bold text-amber-900";
  const taskDetailStyling = "text-sm text-amber-900 italic";

  return (
    <div className="flex-1 flex flex-col items-center max-w-sm max-h-screen">
      <h3 className="text-orange-200 underline">Pending Tasks</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={taskBoxStyling}>
            <div className="flex flex-row gap-6 items-center">
              <div className="flex-1 min-w-20">
                <h2 className={taskNameStyling}>{task.name}</h2>
                <div className={`${taskDetailStyling} flex`}>
                  Due: {task.dueDate}
                  <br />
                  Priority: {task.priority}
                  <br />
                  Assigned To: {task.assignedTo}
                </div>
              </div>
              <div className="flex flex-col">
                <button
                  onClick={() => onDeleteTask(task.name)}
                  className="text-sm py-2 mt-2 px-6 w-full bg-blue-500 text-white rounded hover:bg-red-700 transition duration-150 ease-in-out"
                >
                  Delete
                </button>
                <button
                  onClick={() => onUpdateTaskStatus(task.name, "Completed")}
                  className="text-sm mt-2 w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700"
                >
                  Complete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
