import { createContext, useContext, useState } from "react";

const TasksContext = createContext();

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  return context;
};

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    console.log("task!");
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
