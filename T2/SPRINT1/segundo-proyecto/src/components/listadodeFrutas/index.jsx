import React, { useState } from 'react';

const ListaDeFrutas = ({ frutas }) => {
  const [mostrarFrutas, setMostrarFrutas] = useState(false);

  const handleMostrarFrutas = () => {
    setMostrarFrutas(!mostrarFrutas);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '20px' }}>
      <h2>Lista de Frutas</h2>
      <button
        style={{
          padding: '8px 16px',
          fontSize: '14px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        onClick={handleMostrarFrutas}
      >
        {mostrarFrutas ? 'Ocultar Frutas' : 'Mostrar Frutas'}
      </button>

      {mostrarFrutas && (
        <ul style={{ listStyleType: 'none', padding: 0, marginTop: '10px' }}>
          {frutas.map((fruta, index) => (
            <li
              key={index}
              style={{
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #ddd',
                padding: '10px',
                borderRadius: '4px',
              }}
            >
              <img
                src={fruta.imagen}
                alt={fruta.nombre}
                style={{
                  width: '50px',
                  height: '50px',
                  marginRight: '10px',
                  borderRadius: '50%',
                }}
              />
              <span style={{ fontSize: '16px' }}>{fruta.nombre}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaDeFrutas;




