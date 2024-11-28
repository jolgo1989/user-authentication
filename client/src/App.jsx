import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import TaskFormPage from "./pages/TaskFormPage";
import TasksPage from "./pages/TasksPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import { TasksProvider } from "./context/TasksContext";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <AuthProvider>
      <TasksProvider>
        {/* Envolviendo la aplicación en BrowserRouter para habilitar el
      enrutamiento */}
        <BrowserRouter
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
          <main className="container mx-auto px-10">
            <Navbar />
            {/* Definición de rutas para la navegación */}
            <Routes>
              {/* Ruta principal que muestra "Home page" */}
              <Route path="/" element={<HomePage />} />
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
          </main>
        </BrowserRouter>
      </TasksProvider>
    </AuthProvider>
  );
};

export default App;
