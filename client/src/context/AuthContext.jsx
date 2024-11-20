import { createContext, useState, useContext, useEffect } from "react"; // Importamos funciones de React necesarias
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth"; // Función que realiza la solicitud de registro a la API
import Cookies from "js-cookie";
import { set } from "mongoose";
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
      const res = await loginRequest(user); // Realiza una solicitud a la API de inicio de sesión con los datos del usuario
      console.log(res); // Muestra en la consola la respuesta completa de la API
      setIsAuthenticated(true);
      setUser(res.data);
    } catch (error) {
      // Manejo de errores en la respuesta de la API
      if (Array.isArray(error.response.data)) {
        // Si la respuesta del error contiene un array (ej. errores de validación)
        return setErrors(error.response.data); // Almacena los errores en el estado `errors`
      }
      // Si no es un array, se asume que es un mensaje de error simple
      setErrors(error.response.data.message); // Almacena el mensaje de error en el estado `errors`
    }
  };

  // Efecto secundario para limpiar los errores después de 5 segundos
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]); // Limpia los errores después de 5 segundos
      }, 5000);
      return () => clearTimeout(timer); // Limpia el temporizador cuando el componente se desmonta o los errores cambian
    }
  }, [errors]); // Este efecto se ejecuta cada vez que el estado `errors` cambia

  useEffect(() => {
    const checklogin = async () => {
      const cookies = Cookies.get();

      if (cookies.token) {
        setIsAuthenticated(false);
        return setUser(null);
      }
      {
        try {
          const res = await verifyTokenRequest(cookies.token);
          console.log(res);
          if (!res.data) setIsAuthenticated(false);

          setIsAuthenticated(true);
          setUser(res.data);
        } catch (error) {
          setIsAuthenticated(false);
          setUser(null);
        }
      }
    };
    checklogin();
  }, []);

  // Devuelve el proveedor del contexto con los valores necesarios
  return (
    <AuthContext.Provider
      value={{ singup, signin, user, isAuthenticated, errors }} // Valores expuestos por el contexto
    >
      {children} {/* Renderiza los hijos envueltos en el proveedor */}
    </AuthContext.Provider>
  );
};
