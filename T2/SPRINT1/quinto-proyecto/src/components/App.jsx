import React from 'react';
import TareasApp from '../components/GestordeTareas/index.jsx';

const App = () => {
  return (
    <div className='background'>
      <h1 style={{textAlign : 'center', color: 'red' }}>APP DE TAREAS</h1>
      <TareasApp/>
    </div>
  );
};

export default App;