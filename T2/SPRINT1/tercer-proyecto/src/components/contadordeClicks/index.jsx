import React, { useState } from 'react';
import './Contador.css';

const Contador = () => {
  const [contador, setContador] = useState(0);

  const handleIncrementar = () => {
    setContador(contador + 1);
  };
  const handleReset = () => {
    setContador(0);
  };

  return (
    <div className="contador-container">
      <h1 className="contador-value">Contador de Clicks: {contador}</h1>
      <button className="contador-button" onClick={handleIncrementar}>
        Incrementar
      </button>
      <button className="reset-button" onClick={handleReset}>
          Reset
      </button>
      
    </div>
  );
};

export default Contador;




