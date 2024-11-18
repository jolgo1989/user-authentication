import { useForm } from "react-hook-form"; // Librería para manejar formularios y validaciones
import { useAuth } from "../context/AuthContext"; // Contexto de autenticación personalizado
import { useEffect } from "react"; // Hook para manejar efectos secundarios
import { useNavigate } from "react-router-dom"; // Hook para la navegación entre rutas

// Componente RegisterPage: formulario de registro de usuario
const RegisterPage = () => {
  // useForm proporciona funciones y estados para manejar el formulario
  const {
    register, // Método para registrar inputs con validaciones
    handleSubmit, // Método que se usa para manejar el envío del formulario
    formState: { errors }, // Objeto que contiene errores de validación
  } = useForm();

  // useAuth proporciona funciones y estados del contexto de autenticación
  const { singup, isAuthenticated, errors: registerErrors } = useAuth();

  // Hook de navegación para redirigir al usuario a otra página
  const navigate = useNavigate();

  // useEffect se ejecuta cuando el estado de autenticación cambia
  useEffect(() => {
    // Si el usuario está autenticado, redirige a la página de tareas
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]); // Dependencia: isAuthenticated

  // Función que se ejecuta cuando se envía el formulario
  const onSubmit = handleSubmit(async (values) => {
    singup(values); // Llama a la función de registro del contexto de autenticación
  });

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      {/* Muestra los errores de registro si existen */}
      {registerErrors.map((error, i) => (
        <div className="bg-red-500 p-2 text-white" key={i}>
          {error} {/* Este error proviene del contexto AuthContext */}
        </div>
      ))}

      {/* Formulario de registro */}
      <form onSubmit={onSubmit}>
        {/* Campo para el nombre de usuario */}
        <input
          type="text"
          {...register("username", { required: true })} // Valida que sea obligatorio
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Username" // Placeholder para el campo
          autoComplete="username" // Ayuda al navegador a autocompletar el campo
        />
        {/* Muestra un mensaje de error si el nombre de usuario no se completa */}
        {errors.username && (
          <p className="text-red-500">Username is required</p>
        )}

        {/* Campo para el correo electrónico */}
        <input
          type="email"
          {...register("email", { required: true })} // Valida que sea obligatorio
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Email" // Placeholder para el campo
          autoComplete="email" // Ayuda al navegador a autocompletar el campo
        />
        {/* Muestra un mensaje de error si el correo electrónico no se completa */}
        {errors.email && <p className="text-red-500">Email is required</p>}

        {/* Campo para la contraseña */}
        <input
          type="password"
          {...register("password", { required: true })} // Valida que sea obligatorio
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Password" // Placeholder para el campo
          autoComplete="new-password" // Ayuda al navegador a autocompletar el campo
        />
        {/* Muestra un mensaje de error si la contraseña no se completa */}
        {errors.password && (
          <p className="text-red-500">Password is required</p>
        )}

        {/* Botón para enviar el formulario */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
