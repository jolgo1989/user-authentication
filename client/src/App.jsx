import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      {/* Envolviendo la aplicación en BrowserRouter para habilitar el
      enrutamiento */}
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        {/* Definición de rutas para la navegación */}
        <Routes>
          {/* Ruta principal que muestra "Home page" */}
          <Route path="/" element={<h1>Home page</h1>} />
          {/* Ruta de login */}
          <Route path="/login" element={<LoginPage />} />
          {/* Ruta de registro */}
          <Route path="/register" element={<RegisterPage />} />
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
    </AuthProvider>
  );
};

export default App;
