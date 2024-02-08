import React from 'react';

const Modal = ({ imagen, cerrarModal }) => {
  return (
    <div className="modal">
      <div className="modal-contenido">
        <span className="cerrar" onClick={cerrarModal}>&times;</span>
        <img src={imagen.download_url} alt={`Imagen ${imagen.id}`} className="imagen-modal" />
      </div>
    </div>
  );
};

export default Modal;
