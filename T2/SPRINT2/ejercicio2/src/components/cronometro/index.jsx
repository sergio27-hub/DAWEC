// Cronometro.js
import React, { Component } from 'react';

class Cronometro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiempo: props.tiempo || 0,
      activo: false,
    };
    this.intervalId = null;
  }

  iniciarCronometro = () => {
    if (!this.state.activo) {
      this.setState({ activo: true });
      this.intervalId = setInterval(() => {
        this.setState((prevState) => ({
          tiempo: prevState.tiempo + 10,
        }));
      }, 10);
    }
  };

  pausarCronometro = () => {
    if (this.state.activo) {
      clearInterval(this.intervalId);
      this.setState({ activo: false });
    }
  };

  reiniciarCronometro = () => {
    clearInterval(this.intervalId);
    this.setState({
      tiempo: 0,
      activo: false,
    });
  };

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { tiempo, activo } = this.state;

    const milisegundos = String(tiempo % 1000).slice(0, 2);
    const segundos = Math.floor((tiempo / 1000) % 60);
    const minutos = Math.floor((tiempo / (1000 * 60)) % 60);
    const horas = Math.floor(tiempo / (1000 * 60 * 60));

    return (
      <div className="cronometro-container">
        <div className="tiempo">
          <span className="grande">{String(horas).padStart(2, '0')}</span>:
          <span className="grande">{String(minutos).padStart(2, '0')}</span>:
          <span className="pequeno">{String(segundos).padStart(2, '0')}</span>:
          <span className="pequeno">{String(milisegundos).padStart(2, '0')}</span>
        </div>
        <div className="botones">
          <button onClick={this.iniciarCronometro} disabled={activo}>
            Iniciar
          </button>
          <button onClick={this.pausarCronometro} disabled={!activo}>
            Pausar
          </button>
          <button onClick={this.reiniciarCronometro}>Reiniciar</button>
        </div>
      </div>
    );
  }
}

export default Cronometro;

