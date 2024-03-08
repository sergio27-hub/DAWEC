import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth.js";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Llamamos a la función doCreateUserWithEmailAndPassword con los datos del formulario
      await doCreateUserWithEmailAndPassword(email, password);
      // Si el registro es exitoso, mostramos un mensaje de éxito
      setSuccessMessage("Usuario registrado exitosamente");
      // Redirigimos al usuario a la página de inicio de sesión
      navigate("/login");
    } catch (error) {
      // Si ocurre un error durante el registro, lo manejamos mostrándolo al usuario
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p>{error}</p>}
        {successMessage && <p>{successMessage}</p>}
        <button type="submit" disabled={isSubmitting}>
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;
