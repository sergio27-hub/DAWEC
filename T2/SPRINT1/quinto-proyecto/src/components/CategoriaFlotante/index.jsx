import React from 'react';
import './estilos.css';

const CategoriasFlotantes = ({ categorias, handleEliminarCategoria }) => {
  return (
    <div className="categorias-flotantes">
      <h3>Categorías</h3>
      {categorias.map((categoria) => (
        <div key={categoria} className="categoria-flotante">
          <span>{categoria}</span>
          <button onClick={() => handleEliminarCategoria(categoria)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default CategoriasFlotantes;
