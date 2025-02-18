import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Tasks from "./components/Tasks/Tasks.jsx";
import AddTask from "./components/AddTask/AddTask.jsx";
import TaskDetails from "./components/Pages/TaskDetails.jsx";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
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
            </>
          }
        ></Route>
        <Route
          path="/details"
          element={
            <>
              <TaskDetails tasks={tasks} />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
