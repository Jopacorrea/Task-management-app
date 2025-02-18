import { ChevronRightIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  return (
    <div>
      <ul className="space-y-4 p-6 bg-slate-200 shadow rounded-md">
        {tasks.map((task) => (
          <div key={task.id} className="flex gap-2">
            <li className="bg-slate-400 text-white rounded-md w-full">
              <button
                onClick={() => onTaskClick(task.id)}
                className={`bg-slate-400 text-white p-2 w-full text-left rounded-md ${
                  task.isCompleted && "line-through"
                }`}
              >
                {task.title}
              </button>
            </li>
            {/* Link with properly encoded query parameters */}
            <Link
              to={`/details?title=${encodeURIComponent(task.title)}&description=${encodeURIComponent(task.description)}`}
            >
              <button className="bg-slate-400 text-white p-2 rounded-md">
                <ChevronRightIcon />
              </button>
            </Link>

            <button
              onClick={() => onDeleteTaskClick(task.id)}
              className="bg-slate-400 text-white p-2 rounded-md"
            >
              <Trash2Icon />
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
