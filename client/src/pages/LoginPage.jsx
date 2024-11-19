import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: signinErrors } = useAuth();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {/* Muestra los errores de registro si existen */}
        {signinErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white text-center my-2" key={i}>
            {error} {/* Este error proviene del contexto AuthContext */}
          </div>
        ))}
        <h1 className="text-2xl font-bold text-white">Login</h1>
        <form onSubmit={onSubmit}>
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
          <button type="submit">Login</button>
        </form>
        <p className="flex gap-x-2 justify-between">
          Don't have an account ?
          <Link to="/register" className="text-sky-500">
            Sing up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
