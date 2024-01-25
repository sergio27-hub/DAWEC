import React from 'react';

const Saludo = ({ nombre }) => {
  return (
    <div style={{ textAlign: 'center', margin: '10px' }}>
      {nombre ? (
        <p style={{ fontSize: '18px', color: '#555' }}>Hola, {nombre}</p>
      ) : (
        <p style={{ fontSize: '18px', color: '#555' }}>¡Hola! Ingresa tu nombre</p>
      )}
    </div>
  );
}

export default Saludo;
