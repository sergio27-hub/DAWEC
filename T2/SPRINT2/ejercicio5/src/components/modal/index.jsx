import React, { Component } from 'react';
import './modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: this.props.images.findIndex((image) => image.id === this.props.selectedImage.id)
    };
  }

  handlePrevClick = () => {
    const { currentIndex } = this.state;
    if (currentIndex > 0) {
      this.setState({ currentIndex: currentIndex - 1 });
    }
  };

  handleNextClick = () => {
    const { currentIndex } = this.state;
    const { images } = this.props;
    if (currentIndex < images.length - 1) {
      this.setState({ currentIndex: currentIndex + 1 });
    }
  };

  render() {
    const { images, onClose } = this.props;
    const { currentIndex } = this.state;
    const currentImage = images[currentIndex];

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={onClose}>Cerrar</button>
          <img src={currentImage.urls.regular} alt={currentImage.alt_description}/>
          <div className="navigation-buttons">
            <button onClick={this.handlePrevClick} disabled={currentIndex === 0}>Anterior</button>
            <button onClick={this.handleNextClick} disabled={currentIndex === images.length - 1}>Siguiente</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;