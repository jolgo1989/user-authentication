import { createContext, useState, useContext } from "react"; // Importamos funciones de React necesarias
import { registerRequest, loginRequest } from "../api/auth"; // Función que realiza la solicitud de registro a la API

// Creación del contexto para la autenticación
export const AuthContext = createContext();

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext); // Obtiene el contexto de AuthContext
  if (!context) {
    // Verifica si el contexto no está disponible
    throw new Error("useAuth must be used within a AuthProvider"); // Lanza un error si se usa fuera del proveedor
  }
  return context; // Devuelve el contexto si está disponible
};

// Componente proveedor para el contexto de autenticación
export const AuthProvider = ({ children }) => {
  // Estados para manejar la autenticación
  const [user, setUser] = useState(null); // Estado para almacenar los datos del usuario
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado para saber si el usuario está autenticado
  const [errors, setErrors] = useState([]); // Estado para almacenar errores de autenticación

  // Función para manejar el registro de usuarios
  const singup = async (user) => {
    try {
      const res = await registerRequest(user); // Realiza una solicitud a la API de registro
      console.log(res.data); // Imprime en consola la respuesta de la API
      setUser(res.data); // Actualiza el estado del usuario con los datos de la API
      setIsAuthenticated(true); // Cambia el estado de autenticación a verdadero
    } catch (error) {
      console.log(error.response); // Muestra el error de la API en consola
      setErrors(error.response.data); // Almacena los errores en el estado
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user); // Realiza una solicitud a la API de login
      console.log(res); // Imprime en consola la respuesta de la API
    } catch (error) {
      console.log(error); // Muestra el error de la API en consola
    }
  };

  // Devuelve el proveedor del contexto con los valores necesarios
  return (
    <AuthContext.Provider
      value={{ singup, signin, user, isAuthenticated, errors }} // Valores expuestos por el contexto
    >
      {children} {/* Renderiza los hijos envueltos en el proveedor */}
    </AuthContext.Provider>
  );
};
