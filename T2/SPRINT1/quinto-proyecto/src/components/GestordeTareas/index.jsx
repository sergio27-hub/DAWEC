import React, { useState, useEffect } from 'react';
import './estilos.css'; 
import CategoriasFlotantes from '../CategoriaFlotante/index.jsx';

const TareasApp = () => {
  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem('tareasApp_tareas');
    return tareasGuardadas !== null ? JSON.parse(tareasGuardadas) : [];
  }	);
  const [categorias, setCategorias] = useState(() => {
    const categoriasGuardadas = localStorage.getItem('tareasApp_categorias');
    return categoriasGuardadas !== null ? JSON.parse(categoriasGuardadas) : [];
  });
  const [tareaEditando, setTareaEditando] = useState(null);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [nuevaCategoria, setNuevaCategoria] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('Todas');

  useEffect(() => {
    const categoriasGuardadas = JSON.parse(localStorage.getItem('tareasApp_categorias') || '[]');
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareasApp_tareas') || '[]');

    if (categoriasGuardadas.length > 0) {
      setCategorias(categoriasGuardadas);
    }

    setTareas(tareasGuardadas);
  }, []); // Cambiado para que solo se ejecute al montar el componente

  useEffect(() => {
    localStorage.setItem('tareasApp_categorias', JSON.stringify(categorias));
  }, [categorias]);

  useEffect(() => {
    localStorage.setItem('tareasApp_tareas', JSON.stringify(tareas));
  }, [tareas]);

  const handleAgregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      if (tareaEditando) {
        // Editar la tarea existente
        const nuevasTareas = tareas.map((t) =>
          t.id === tareaEditando.id ? { ...t, titulo: nuevaTarea, categoria: nuevaCategoria || 'General' } : t
        );
        setTareas(nuevasTareas);
        setTareaEditando(null); // Limpiar la tarea en edición después de editar
      } else {
        // Agregar una nueva tarea
        const nuevaTareaObj = {
          id: Date.now(),
          titulo: nuevaTarea,
          completada: false,
          categoria: nuevaCategoria || 'General',
        };
        setTareas([...tareas, nuevaTareaObj]);
      }

      setNuevaTarea('');
      setNuevaCategoria('');
    }
  };

  const handleEditarTarea = (tarea) => {
    // Al hacer clic en el botón de editar, establecemos la tarea en edición
    setNuevaTarea(tarea.titulo);
    setNuevaCategoria(tarea.categoria);
    setTareaEditando(tarea);
  };

  const handleEliminarTarea = (id) => {
    const nuevasTareas = tareas.filter((t) => t.id !== id);
    setTareas(nuevasTareas);
  };

  const handleMarcarComoCompletada = (id) => {
    const nuevasTareas = tareas.map((t) =>
      t.id === id ? { ...t, completada: !t.completada } : t
    );
    setTareas(nuevasTareas);
  };

  const handleFiltrarPorCategoria = (categoria) => {
    setFiltroCategoria(categoria);
  };

  const handleAgregarCategoria = () => {
    if (nuevaCategoria.trim() !== '' && !categorias.includes(nuevaCategoria)) {
      setCategorias([...categorias, nuevaCategoria]);
      setNuevaCategoria('');
    }
  };
  const handleEliminarCategoria = (categoria) => {
    const nuevasCategorias = categorias.filter((c) => c !== categoria);
    setCategorias(nuevasCategorias);

    // También deberías eliminar las tareas asociadas a esa categoría si lo deseas
    const nuevasTareas = tareas.filter((t) => t.categoria !== categoria);
    setTareas(nuevasTareas);
  };

  return (
    <div className="tareas-app">
      <CategoriasFlotantes categorias={categorias} handleEliminarCategoria={handleEliminarCategoria} />
      <h1 className="heading">Lista de Tareas</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Nueva tarea"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          className="input"
        />
        <select
          value={nuevaCategoria}
          onChange={(e) => setNuevaCategoria(e.target.value)}
          className="select"
        >
          <option value="">Seleccionar Categoría</option>
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
        <button onClick={handleAgregarTarea} className="button">
          Agregar Tarea
        </button>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Nueva categoría"
          value={nuevaCategoria}
          onChange={(e) => setNuevaCategoria(e.target.value)}
          className="input"
        />
        <button onClick={handleAgregarCategoria} className="button">
          Agregar Categoría
        </button>
      </div>
      <div className="filtros">
        <button onClick={() => handleFiltrarPorCategoria('Todas')} className="button-Category">
          Todas
        </button>
        {categorias.map((categoria) => (
          <button
            key={categoria}
            onClick={() => handleFiltrarPorCategoria(categoria)}
            className="button-Category"
          >
            {categoria}
          </button>
        ))}
      </div>
      <ul className="tareas-lista">
        {tareas
          .filter((tarea) => filtroCategoria === 'Todas' || tarea.categoria === filtroCategoria)
          .map((tarea) => (
            <li key={tarea.id} className={tarea.completada ? 'completada tarea' : 'tarea'}>
              <span className="tarea-titulo">{tarea.titulo}</span>
              <button
                onClick={() => handleMarcarComoCompletada(tarea.id)}
                className="button"
              >
                {tarea.completada ? 'Desmarcar' : 'Completar'}
              </button>
              <button onClick={() => handleEliminarTarea(tarea.id)} className="button">
                Eliminar
              </button>
              <button onClick={() => handleEditarTarea(tarea)} className="button">
                Editar
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TareasApp;







