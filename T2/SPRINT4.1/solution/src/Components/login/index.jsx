import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { doSignInWithEmailAndPassword } from '../../firebase/auth.js'; // Importar la función de inicio de sesión desde firebase.js

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await doSignInWithEmailAndPassword(email, password);
            navigate("/reservas"); // Redirigir al usuario a la página principal después del inicio de sesión exitoso
        } catch (error) {
            setError(error.message); // Mostrar el mensaje de error si ocurre algún problema durante el inicio de sesión
        }
    };

    return (
        <div>
            <div>
                <h2>Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p>{error}</p>} {/* Mostrar el mensaje de error si existe */}
                    <button type="submit">Iniciar Sesión</button> {/* Cambiar el evento onClick por onSubmit */}
                    <p className="mt-2 text-center text-sm text-gray-600">
                        ¿No tienes una cuenta? <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">Regístrate</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;

