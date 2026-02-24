import { useState } from "react";

function TodoContainer() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  // Add Activity
  const handleAdd = () => {
    if (input.trim() === "") return;

    setTodos((prev) => [...prev, input]);
    setInput("");
  };

  // Delete Activity
  const handleDelete = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex gap-10 flex-wrap mt-8">
      {/* Left Section */}
      <div className="flex-1 min-w-[300px]">
        <h1 className="text-2xl font-bold mb-3">
          Manage Activities
        </h1>

        <div className="flex shadow-md">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Next Activity?"
            className="border p-3 w-full rounded-l-md outline-none"
          />
          <button
            onClick={handleAdd}
            className="bg-black text-white px-6 rounded-r-md hover:bg-gray-800 transition"
          >
            Add
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 min-w-[300px] bg-[#8272DA] p-6 rounded-md text-white shadow-md">
        <h1 className="text-xl font-semibold mb-4">
          Today's Activity
        </h1>

        {/* Empty Message */}
        {todos.length === 0 && (
          <p className="bg-white text-black p-3 rounded-md">
            You haven't added anything yet
          </p>
        )}

        {/* Activity List */}
        {todos.map((todo, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white text-black p-3 rounded-md mb-3"
          >
            <p>
              {index + 1}. {todo}
            </p>

            <button
              onClick={() => handleDelete(index)}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoContainer;