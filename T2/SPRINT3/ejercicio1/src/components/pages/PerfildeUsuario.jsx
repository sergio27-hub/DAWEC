import React from 'react';
import { useParams } from 'react-router-dom';
import '../../App.css';

function PerfilDeUsuario() {
  const { userId } = useParams();

  return (
    <div className='PerfilDeUsuario'>
      <h1>Perfil del Usuario: {userId}</h1>
      {/* Aquí podrías hacer una solicitud a la API para obtener información sobre el usuario */}
    </div>
  );
}

export default PerfilDeUsuario;
