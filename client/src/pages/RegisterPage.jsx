import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Componente RegisterPage para el formulario de registro de usuario
const RegisterPage = () => {
  // Utiliza useForm para manejar la validación y los datos del formulario
  // errors: registerErrors: renombramos la variable errors por registerErrors y se utiliza para mostrar los errores de validación
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { singup, isAuthenticated, errors: registerErrors } = useAuth();
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
      {registerErrors.map((error, i) => (
        <div className="bg-red-500 p-2 text-white" key={i}>
          {error}
        </div> //Este error viene del AuthContext.jsx
      ))}
      <form onSubmit={onSubmit}>
        {/* Campo de entrada para el nombre de usuario */}
        <input
          type="text"
          {...register("username", { required: true })} // El campo "username" se refiere al nombre del input y asegura que el campo sea obligatorio
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Username"
          autoComplete="username" // Autocompletado para el campo de usuario
        />

        {errors.username && (
          <p className="text-red-500"> Username isrequired</p>
        )}

        {/* Campo de entrada para el correo electrónico */}
        <input
          type="email"
          {...register("email", { required: true })} // Valida que el campo sea obligatorio
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Email"
          autoComplete="email" // Autocompletado para el campo de correo
        />

        {errors.email && <p className="text-red-500"> Email isrequired</p>}

        {/* Campo de entrada para la contraseña */}
        <input
          type="password"
          {...register("password", { required: true })} // Valida que el campo sea obligatorio
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Password"
          autoComplete="new-password" // Autocompletado para la contraseña
        />
        {errors.password && (
          <p className="text-red-500"> Password isrequired</p>
        )}

        {/* Botón para enviar el formulario */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
