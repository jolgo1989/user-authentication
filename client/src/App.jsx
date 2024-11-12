import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

const App = () => {
  return (
    // Envolviendo la aplicación en BrowserRouter para habilitar el enrutamiento
    <BrowserRouter>
      {/* Definición de rutas para la navegación */}
      <Routes>
        {/* Ruta principal que muestra "Home page" */}
        <Route path="/" element={<h1>Home page</h1>} />
        {/* Ruta de login */}
        <Route path="/login" element={<h1>Login</h1>} />
        {/* Ruta de registro */}
        <Route path="/register" element={<h1>Register</h1>} />
        {/* Ruta para ver todas las tareas */}
        <Route path="/tasks" element={<h1>Tasks page</h1>} />
        {/* Ruta para agregar una nueva tarea */}
        <Route path="/add-task" element={<h1>Add tasks</h1>} />
        {/* Ruta para actualizar una tarea específica, donde ":id" representa el ID de la tarea */}
        <Route path="/tasks/:id" element={<h1>Update task</h1>} />
        {/* Ruta del perfil del usuario */}
        <Route path="/profile" element={<h1>Profile</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
