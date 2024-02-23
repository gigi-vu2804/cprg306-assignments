export default function CompletedTask({
  tasks,
  onDeleteTask,
  onUpdateTaskStatus,
}) {
  const taskBoxStyling =
    "p-2 mx-4 mt-2 mb-4 bg-orange-200 max-w-lg rounded-lg shadow-sm";
  const taskNameStyling = "text-base font-bold text-amber-900";
  const taskDetailStyling = "text-sm text-amber-900 italic";

  return (
    <div className="flex-1 flex flex-col items-center max-w-sm">
      <h3 className="text-orange-200 underline">Completed Tasks</h3>
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
                  className="text-sm py-2 mt-2 px-6 w-full bg-blue-500 text-white rounded hover:bg-red-700 transition cursor-pointer duration-150 ease-in-out"
                >
                  Delete
                </button>
                <button
                  onClick={() => onUpdateTaskStatus(task.name, "Pending")}
                  className="text-sm py-2 mt-2 px-6 w-full bg-yellow-500 text-white rounded hover:bg-yellow-700 transition cursor-pointer duration-150 ease-in-out"
                >
                  Pending
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
