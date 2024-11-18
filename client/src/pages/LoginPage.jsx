import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin } = useAuth();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
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
      </div>
    </div>
  );
};

export default LoginPage;
