import React, { useEffect } from "react";
import { useForm } from "react-hook-form"; // Hook para manejar formularios con validación
import { useAuth } from "../context/AuthContext"; // Contexto para manejar autenticación
import { Link, useNavigate } from "react-router-dom"; // Navegación entre rutas

const LoginPage = () => {
  // Desestructuración de funciones y estados de useForm
  const {
    register, // Registra los campos del formulario para la validación
    handleSubmit, // Maneja el envío del formulario
    formState: { errors }, // Contiene los errores de validación
  } = useForm();

  // Desestructuración de funciones y errores del contexto de autenticación
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();

  const navigate = useNavigate();

  // Maneja el evento de envío del formulario
  const onSubmit = handleSubmit((data) => {
    signin(data); // Llama a la función signin del contexto con los datos del formulario
  });

  useEffect(() => {
    // Verifica si el usuario está autenticado
    if (isAuthenticated) {
      // Si el usuario está autenticado, redirige a la ruta "/tasks"
      navigate("/tasks");
    }
    // Este efecto se ejecutará cada vez que cambie el valor de "isAuthenticated"
  }, [isAuthenticated]);

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {/* Muestra los errores provenientes del contexto si existen */}
        {signinErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white text-center my-2" key={i}>
            {error} {/* Muestra el mensaje de error */}
          </div>
        ))}
        {/* Título de la página de inicio de sesión */}
        <h1 className="text-2xl font-bold text-white">Login</h1>
        <form onSubmit={onSubmit}>
          {/* Campo de entrada para el correo electrónico */}
          <input
            type="email"
            {...register("email", { required: true })} // Registra el campo y valida que sea obligatorio
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Email"
            autoComplete="email" // Autocompletado del navegador para el campo de correo electrónico
          />
          {/* Mensaje de error para el correo si no se llena */}
          {errors.email && <p className="text-red-500">Email is required</p>}

          {/* Campo de entrada para la contraseña */}
          <input
            type="password"
            {...register("password", { required: true })} // Registra el campo y valida que sea obligatorio
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Password"
            autoComplete="new-password" // Autocompletado del navegador para contraseñas
          />
          {/* Mensaje de error para la contraseña si no se llena */}
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}

          {/* Botón para enviar el formulario */}
          <button type="submit">Login</button>
        </form>
        {/* Enlace para redirigir al registro si el usuario no tiene cuenta */}
        <p className="flex gap-x-2 justify-between">
          Don't have an account?
          <Link to="/register" className="text-sky-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
