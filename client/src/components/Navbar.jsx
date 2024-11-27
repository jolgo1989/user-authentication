import { Link } from "react-router-dom"; // Importa el componente Link para manejar la navegación entre rutas
import { useAuth } from "../context/AuthContext"; // Importa el contexto de autenticación para acceder al estado y funciones relacionadas

const Navbar = () => {
  // Desestructuramos `isAuthenticated`, `logout` y `user` del contexto de autenticación
  const { isAuthenticated, logout, user } = useAuth();

  // Muestra la información del usuario en la consola para depuración
  console.log(user);

  return (
    // Contenedor principal de la barra de navegación
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      {/* Enlace al inicio */}
      <Link to="/">
        <h1 className="text-2xl font-bold">Tasks Manager</h1>{" "}
        {/* Título de la aplicación */}
      </Link>

      {/* Lista de elementos de la barra de navegación */}
      <ul className="flex gap-x-2">
        {isAuthenticated ? ( // Si el usuario está autenticado, muestra las opciones correspondientes
          <>
            {/* Mensaje de bienvenida con el nombre de usuario */}
            <li>Welcome {user.username}</li>
            <li>
              {/* Enlace para agregar una nueva tarea */}
              <Link
                to="/add-task"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Add Task
              </Link>
            </li>
            <li>
              {/* Enlace para cerrar sesión, que llama a la función `logout` */}
              <Link to="/" onClick={() => logout()}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          // Si el usuario no está autenticado, muestra las opciones de login y registro
          <>
            <li>
              {/* Enlace para ir a la página de login */}
              <Link
                to="/login"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Login
              </Link>
            </li>
            <li>
              {/* Enlace para ir a la página de registro */}
              <Link
                to="/register"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
