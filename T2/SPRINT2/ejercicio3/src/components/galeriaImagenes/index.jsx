import React, { Component } from 'react';
class AppTareas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tareas: [],
      nuevaTarea: '',
      filtro: 'todas', // Opciones: 'todas', 'completadas', 'pendientes'
    };
  }

  componentDidMount() {
    const storedTareas = JSON.parse(localStorage.getItem('tareas')) || [];
    this.setState({ tareas: storedTareas });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tareas !== this.state.tareas) {
      localStorage.setItem('tareas', JSON.stringify(this.state.tareas));
    }
  }

  agregarTarea = () => {
    const { nuevaTarea } = this.state;
    if (nuevaTarea.trim() !== '') {
      this.setState((prevState) => ({
        tareas: [...prevState.tareas, { texto: nuevaTarea, completada: false }],
        nuevaTarea: '',
      }));
    }
  };

  eliminarTarea = (index) => {
    this.setState((prevState) => ({
      tareas: prevState.tareas.filter((_, i) => i !== index),
    }));
  };

  toggleCompletada = (index) => {
    this.setState((prevState) => ({
      tareas: prevState.tareas.map((t, i) =>
        i === index ? { ...t, completada: !t.completada } : t
      ),
    }));
  };

  handleFiltro = (filtro) => {
    this.setState({ filtro });
  };

  render() {
    const { tareas, nuevaTarea, filtro } = this.state;

    const tareasFiltradas =
      filtro === 'completadas'
        ? tareas.filter((tarea) => tarea.completada)
        : filtro === 'pendientes'
        ? tareas.filter((tarea) => !tarea.completada)
        : tareas;

    return (
      <div className="container">
        <h1>Aplicación de Tareas</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={nuevaTarea}
            onChange={(e) => this.setState({ nuevaTarea: e.target.value })}
          />
          <button type="button" onClick={this.agregarTarea}>
            Agregar Tarea
          </button>
        </form>

        <div className="filter-container">
          <div className="filter-buttons">
            <button
              className={filtro === 'todas' ? 'active' : ''}
              onClick={() => this.handleFiltro('todas')}
            >
              Todas
            </button>
            <button
              className={filtro === 'completadas' ? 'active' : ''}
              onClick={() => this.handleFiltro('completadas')}
            >
              Completadas
            </button>
            <button
              className={filtro === 'pendientes' ? 'active' : ''}
              onClick={() => this.handleFiltro('pendientes')}
            >
              Pendientes
            </button>
          </div>
        </div>

        <ul>
          {tareasFiltradas.map((tarea, index) => (
            <li key={index}>
              <span
                onClick={() => this.toggleCompletada(index)}
                className={tarea.completada ? 'completed' : ''}
              >
                {tarea.texto}
              </span>
              <div>
                <button
                  className={tarea.completada ? 'desmarcar' : 'completar'}
                  onClick={() => this.toggleCompletada(index)}
                >
                </button>
                <button onClick={() => this.eliminarTarea(index)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AppTareas;
