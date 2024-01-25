import React, { useState } from 'react';
import HolaMundo from './saludo/index.jsx';
import Saludo from './helloWorld/index.jsx';



const App = () => {
  const [nombre, setNombre] = useState('');
  const [saludoVisible, setSaludoVisible] = useState(false);

  const handleChange = (event) => {
    setNombre(event.target.value);
    setSaludoVisible(false); // Oculta el saludo cuando el nombre cambia
  }

  const handleSaludo = () => {
    setSaludoVisible(true); // Muestra el saludo cuando se hace clic en el botón de saludo
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <HolaMundo />
      <label htmlFor="nombre">Ingresa tu nombre: </label>
      <input
        type="text"
        id="nombre"
        value={nombre}
        onChange={handleChange}
        style={{ margin: '10px' }}
      />
      <Saludo nombre={nombre} />
      <button onClick={handleSaludo} style={{ marginTop: '10px' }}>
        Saludar
      </button>

      {saludoVisible && (
        <p style={{ fontSize: '20px', color: '#007BFF', marginTop: '10px' }}>
          ¡Hola, {nombre}!
        </p>
      )}
    </div>
  );
}

export default App;