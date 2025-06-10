import { useState } from "react";

function TaskInput({ addTask }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    addTask(input);
    setInput("");
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        className="flex-1 p-2 border rounded dark:bg-gray-800"
        type="text"
        value={input}
        placeholder="Add a task..."
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <button onClick={handleAdd} className="bg-green-500 text-white px-4 rounded hover:bg-green-600">
        Add
      </button>
    </div>
  );
}

export default TaskInput;
