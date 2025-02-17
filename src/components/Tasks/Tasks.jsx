import { ChevronRightIcon, DeleteIcon, Trash2Icon } from "lucide-react";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  //console.log(tasks);
  return (
    <div>
      <ul className="space-y-4 p-6 bg-slate-200 shadow rounded-md">
        {tasks.map((tasks) => (
          <div key={tasks.id} className="flex gap-2">
            <li
              key={tasks.id}
              className="bg-slate-400 text-white rounded-md w-full"
            >
              <button
                onClick={() => onTaskClick(tasks.id)}
                className={`bg-slate-400 text-white p-2 w-full text-left rounded-md ${
                  tasks.isCompleted && "line-through"
                } `}
              >
                {tasks.description}
              </button>
            </li>
            <button className="bg-slate-400 text-white p-2 rounded-md ">
              <ChevronRightIcon />
            </button>

            <button onClick={()=> onDeleteTaskClick(tasks.id)} className="bg-slate-400 text-white p-2 rounded-md ">
              <Trash2Icon />
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
