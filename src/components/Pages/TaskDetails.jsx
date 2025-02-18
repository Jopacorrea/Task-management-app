import { ChevronLeftIcon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

function TaskDetails({ tasks }) {
  const location = useLocation();

  // Get the query parameters from the URL
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get("title");
  const description = queryParams.get("description");

  const navigate = useNavigate();

  if (!title || !description) {
    return (
      <div className="h-screen w-screen bg-slate-500 p-6">
        <p>Missing task details...</p>
      </div>
    );
  }

  // Find the task that matches both title and description
  const task = tasks.find(
    (task) => task.title === title && task.description === description
  );

  return (
    <div className="h-screen w-screen bg-slate-500 p-6 space-y-4">
      <div className="w-full flex mx-auto">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="text-4xl font-bold text-white text-center mr-20"
        >
          <ChevronLeftIcon />
        </button>
        <h1 className="text-4xl font-bold text-white">Details</h1>
      </div>

      <div className="bg-slate-400 p-4 rounded-md">
        <h1 className="text-4xl font-bold text-white">{task.title}</h1>
        <p className="text-1xl py-4">{task.description}</p>
      </div>
    </div>
  );
}

export default TaskDetails;
