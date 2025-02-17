import { useState } from "react";
import "./AddTask.css";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        className="bg-slate-50 p-2 rounded-md outline-slate-500"
        type="text"
        placeholder="Title..."
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        className="bg-slate-50 p-2 rounded-md outline-slate-500"
        type="text"
        placeholder="Description..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Fill all the boxes");
          }

          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white p-2 rounded-md"
      >
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
