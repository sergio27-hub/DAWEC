import React, { Component } from 'react';
import Modal from '../modal/index.jsx';
import '../../index.css';

class GaleriaImagenes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagenes: [],
      imagenSeleccionada: null,
      indexImagenActual: 0, // Agregamos indexImagenActual al estado
    };
    this.ballsContainerRef = React.createRef();
  }

  componentDidMount() {
    const WIDTH = 400; // Ancho de la imagen
    const HEIGHT = 300; // Alto de la imagen
    const COUNT = 10; // Cantidad de imágenes que deseas obtener

    fetch(`https://picsum.photos/v2/list?page=15&limit=${COUNT}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          imagenes: data.map((img) => ({
            ...img,
            url: `${img.download_url}/${WIDTH}/${HEIGHT}`,
          })),
        })
      );

    this.initBallsAnimation();
  }

  initBallsAnimation() {
    const colors = ['#3CC157', '#2AA7FF', '#1B1B1B', '#FCBC0F', '#F85F36'];
    const numBalls = 50;

    for (let i = 0; i < numBalls; i++) {
      let ball = document.createElement('div');
      ball.classList.add('ball');
      ball.style.background = colors[Math.floor(Math.random() * colors.length)];
      ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
      ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
      ball.style.transform = `scale(${Math.random()})`;
      ball.style.width = `${Math.random()}em`;
      ball.style.height = ball.style.width;

      this.ballsContainerRef.current.appendChild(ball);
    }

    // Keyframes
    this.ballsContainerRef.current.querySelectorAll('.ball').forEach((el, i, ra) => {
      let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12,
      };

      let anim = el.animate(
        [
          { transform: 'translate(0, 0)' },
          { transform: `translate(${to.x}rem, ${to.y}rem)` },
        ],
        {
          duration: (Math.random() + 1) * 2000, // random duration
          direction: 'alternate',
          fill: 'both',
          iterations: Infinity,
          easing: 'ease-in-out',
        }
      );
    });
  }

  abrirModal = (imagen) => {
    this.setState({ imagenSeleccionada: imagen });
  };

  cerrarModal = () => {
    this.setState({ imagenSeleccionada: null });
  };

  avanzarImagen = () => {
    const { indexImagenActual, imagenes } = this.state;
    const newIndex = (indexImagenActual + 1) % imagenes.length;
    this.setState({ indexImagenActual: newIndex, imagenSeleccionada: imagenes[newIndex] });
  };

  retrocederImagen = () => {
    const { indexImagenActual, imagenes } = this.state;
    const newIndex = indexImagenActual === 0 ? imagenes.length - 1 : indexImagenActual - 1;
    this.setState({ indexImagenActual: newIndex, imagenSeleccionada: imagenes[newIndex] });
  };

  render() {
    const { imagenes, imagenSeleccionada } = this.state;

    return (
      <div>
        <div ref={this.ballsContainerRef} id="balls-container" />
        <div className="galeria">
          {imagenes.map((imagen, index) => (
            <img
              key={index}
              src={imagen.download_url}
              alt={`Imagen ${index + 1}`}
              onClick={() => this.abrirModal(imagen)}
              className="imagen"
            />
          ))}

          {imagenSeleccionada && (
            <Modal
              imagen={imagenSeleccionada}
              cerrarModal={this.cerrarModal}
              />
              )}
        </div>
      </div>
    );
  }
}

export default GaleriaImagenes;
