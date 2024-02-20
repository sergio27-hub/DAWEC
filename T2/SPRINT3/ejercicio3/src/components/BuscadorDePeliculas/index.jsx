import React, { useState } from 'react';

function BuscadorPeliculas() {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const apiKey = 'b7079c65';
  const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
        setError('');
      } else {
        setMovies([]);
        setError('No se encontraron películas.');
      }
    } catch (error) {
      setError('Hubo un error al buscar películas.');
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar películas..."
        />
        <button type="submit">Buscar</button>
      </form>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      <div className="movies-container">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="poster"
            />
            <div className="title">{movie.Title}</div>
            <div className="year">{movie.Year}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuscadorPeliculas;
