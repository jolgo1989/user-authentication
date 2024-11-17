import { createContext, useState, useContext } from "react";
import { registerRequest } from "../api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  const singup = async (user) => {
    try {
      const res = await registerRequest(user); // Envía los datos a la API de registro
      console.log(res.data); // Muestra la respuesta de la API en consola
      setUser(res.data); // Actualiza el estado de usuario con la respuesta de la API

      setIsAuthenticated(true);
    } catch (error) {
      console.log(error.response);
      setErrors(error.response.data);
    }
  };

  return (
    <AuthContext.Provider value={{ singup, user, isAuthenticated, errors }}>
      {children}
    </AuthContext.Provider>
  );
};
