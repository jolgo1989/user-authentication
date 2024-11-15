import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Componente RegisterPage para el formulario de registro de usuario
const RegisterPage = () => {
  // Utiliza useForm para manejar la validación y los datos del formulario
  const { register, handleSubmit } = useForm();
  const { singup, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  // Función onSubmit que se ejecuta al enviar el formulario
  const onSubmit = handleSubmit(async (values) => {
    singup(values);
  });

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <form onSubmit={onSubmit}>
        {/* Campo de entrada para el nombre de usuario */}
        <input
          type="text"
          {...register("username", { required: true })} // El campo "username" se refiere al nombre del input y asegura que el campo sea obligatorio
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Username"
          autoComplete="username" // Autocompletado para el campo de usuario
        />

        {/* Campo de entrada para el correo electrónico */}
        <input
          type="email"
          {...register("email", { required: true })} // Valida que el campo sea obligatorio
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Email"
          autoComplete="email" // Autocompletado para el campo de correo
        />

        {/* Campo de entrada para la contraseña */}
        <input
          type="password"
          {...register("password", { required: true })} // Valida que el campo sea obligatorio
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Password"
          autoComplete="new-password" // Autocompletado para la contraseña
        />

        {/* Botón para enviar el formulario */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
