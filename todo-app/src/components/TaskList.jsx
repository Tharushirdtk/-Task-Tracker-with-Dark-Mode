function TaskList({ tasks, deleteTask }) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li key={task.id} className="flex justify-between items-center bg-white dark:bg-gray-800 p-3 rounded shadow">
          <span>{task.text}</span>
          <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:underline">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
