import React from 'react';
import ListaDeFrutas from '../components/listadodeFrutas/index.jsx';
import manzanaImage from '../assets/imagesFrutas/Manzana.jpeg';
import platanoImage from '../assets/imagesFrutas/platano.jpeg';
import naranjaImage from '../assets/imagesFrutas/Naranja.jpeg';
import uvaImage from '../assets/imagesFrutas/uva.jpeg';
import fresaImage from '../assets/imagesFrutas/Fresa.jpeg';

const App = () => {
  const frutas = [
    { nombre: 'Manzana', imagen: manzanaImage },
    { nombre: 'Plátano', imagen: platanoImage },
    { nombre: 'Naranja', imagen: naranjaImage },
    { nombre: 'Uva', imagen: uvaImage },
    { nombre: 'Fresa', imagen:  fresaImage },
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <ListaDeFrutas frutas={frutas} />
    </div>
  );
}

export default App;