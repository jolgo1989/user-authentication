import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import TaskFormPage from "./pages/TaskFormPage";
import TasksPage from "./pages/TasksPage";
import ProfilePage from "./pages/ProfilePage";
import HomePaje from "./pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";

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
          <Route path="/" element={<HomePaje />} />
          {/* Ruta de login */}
          <Route path="/login" element={<LoginPage />} />
          {/* Ruta de registro */}
          <Route path="/register" element={<RegisterPage />} />

          {/* Rutas protegidas */}
          <Route element={<ProtectedRoute />}>
            {/* Ruta para ver todas las tareas */}
            <Route path="/tasks" element={<TasksPage />} />
            {/* Ruta para agregar una nueva tarea */}
            <Route path="/add-task" element={<TaskFormPage />} />
            {/* Ruta para actualizar una tarea específica, donde ":id" representa el ID de la tarea */}
            <Route path="/tasks/:id" element={<TaskFormPage />} />
            {/* Ruta del perfil del usuario */}
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
