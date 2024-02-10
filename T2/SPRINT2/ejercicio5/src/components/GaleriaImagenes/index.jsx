import React, { Component } from 'react';
import '../../index.css';
import Modal from '../modal/index.jsx';


class GaleriaImagenesAvanzada extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      selectedImage: null,
      page: 1,
      perPage: 10,
      totalPages: 20,
      searchTerm: '',
      isLoading: false,
      error: '',
      searchBarTop: false,
      showTitle: true,
      showGift: true
    };
    this.accessKey = 'zpxbjY7wY2TTFPDyOYfD6eKLgrKoCYsxyIoi94nAxCs'; // Access Key inicialmente vacío
  }

  componentDidMount() {
    // Solicitar Access Key cuando el componente se monta
    this.requestAccessKey();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // Método para solicitar el Access Key al usuario
  requestAccessKey = () => {
    const accessKey = prompt('Por favor, introduce tu Access Key de Unsplash:');
    if (accessKey) {
      this.accessKey = accessKey || this.accessKey;
      this.loadImages(); // Cargar imágenes una vez que se obtiene el Access Key
    }
  };

  loadImages = async () => {
    const { page, perPage, searchTerm } = this.state;
    this.setState({ isLoading: true, error: '' });

    try {
        const response = await fetch(
            `https://api.unsplash.com/search/photos?page=${page}&per_page=${perPage}&query=${searchTerm}`,
            {
                headers: {
                    Authorization: `Client-ID ${this.accessKey}`
                }
            }
        );
        const data = await response.json();
        this.setState({
            images: data.results, // Usamos data.results para obtener solo las imágenes de la respuesta
            totalPages: response.headers.get('X-Total-Pages'), // Actualizamos el total de páginas
            isLoading: false,
            showTitle: false, // Ocultar el título
            showGift: false // Ocultar la imagen de regalo
        });
    } catch (error) {
        console.error('Error fetching images:', error);
        this.setState({ isLoading: false, error: 'Error al cargar las imágenes. Por favor, intenta nuevamente.' });
    }
};

  handleNextPage = () => {
    this.setState({ page: this.state.page + 1 }, this.loadImages);
  };
  
  handlePreviousPage = () => {
    this.setState({ page: this.state.page - 1 }, this.loadImages);
  };

  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearchSubmit = () => {
    this.setState({ images: [], page: 1, searchBarTop: true }, this.loadImages);
  };

  handleImageClick = (image) => {
    this.setState({ selectedImage: image });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { images, selectedImage, searchTerm, isLoading, error, page, totalPages, searchBarTop,showTitle, showGift } = this.state;
    
    return (
      <div>
      {showTitle && <h1>Galería de imágenes avanzada</h1>}
      {showGift && (
        <div className="gift">
          <img src="https://media0.giphy.com/media/NMBqdKUKQ3aLe/giphy.gif" alt="Gift" />
        </div>
      )}
        <div className={`search-bar ${searchBarTop ? 'search-bar-top' : 'search-bar-center'}`}> 
          <input
            type="text"
            placeholder="Buscar imágenes y colecciones"
            value={searchTerm}
            onChange={this.handleSearchChange}
          />
          <button onClick={this.handleSearchSubmit}>Buscar</button>
        </div>
        {error && <div>Error: {error}</div>}
        <div className="album">
          {images.map((image) => (
            <img
              key={image.id}
              src={image.urls.regular}
              alt={image.alt_description}
              onClick={() => this.handleImageClick(image)}
            />
          ))}
        </div>
        {isLoading && <div className="loading">Cargando...</div>}
        {selectedImage && (
          <Modal
            images={images}
            selectedImage={selectedImage}
            onClose={this.handleCloseModal}
          />
        )}
        <div className="pagination-buttons">
          <button onClick={this.handlePreviousPage} disabled={page === 1}>Anterior</button>
          <button onClick={this.handleNextPage} disabled={page === totalPages}>Siguiente</button>
        </div>
      </div>
    );
  }
}

export default GaleriaImagenesAvanzada;
