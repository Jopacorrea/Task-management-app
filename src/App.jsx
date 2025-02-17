import { useState } from "react";
import Tasks from "./components/Tasks/Tasks.jsx";
import AddTask from "./components/AddTask/AddTask.jsx";
import "./App.css";
import { FunctionSquare } from "lucide-react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "study",
      description: "Study React",
      isCompleted: false,
    },

    {
      id: 2,
      title: "study API Spotify",
      description: "Capstone project ",
      isCompleted: false,
    },

    {
      id: 3,
      title: "Study API apple musiic",
      description: "Capstone project ",
      isCompleted: false,
    },

    {
      id: 4,
      title: "clean home",
      description: "office and bedroom ",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskID) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskID) {
        return { ...task, isCompleted: !task.isCompleted };
      } else {
        return task;
      }
    });

    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskID) {
    const newTasks = tasks.filter((task) => task.id !== taskID);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTasks = {
      id: tasks.length + 1,
      title: title, //or just title
      description: description,
      isCompleted: false,
    };

    setTasks([...tasks, newTasks]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center p-4">
          Task Management
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
