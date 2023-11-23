const apiKey = '43e61ce0177e66cea4af047e505edb4a'; // Reemplaza con tu propia API key de TMDB
const resultsContainer = document.getElementById('results');
const paginationContainer = document.getElementById('pagination');
let currentPage = 1;

document.addEventListener('DOMContentLoaded', function() {
    ['searchButton', 'nextButton', 'prevButton'].forEach(buttonId => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', window[`${buttonId}Event`]);
        }
    });

    // Eventos y carga inicial
    document.getElementById('searchButton').addEventListener('click', searchMoviesEvent);
    document.getElementById('nextButton').addEventListener('click', nextPageEvent);
    document.getElementById('prevButton').addEventListener('click', prevPageEvent);

    if (apiKey) {
        loadGenres();
    }
});

function searchMovies(keyword, page) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-ES&query=${keyword}&page=${page}&include_adult=false`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayResults(data.results);
            displayPagination(data.total_pages, page);
        })
        .catch(error => console.error('Error al buscar películas:', error));
}

function displayResults(movies) {
    resultsContainer.innerHTML = '';
    movies.forEach(movie => {
        const movieElement = createMovieElement(movie);
        resultsContainer.appendChild(movieElement);
    });
}
function nextPage(keyword, genre) {
    if (currentPage < 1000) {
        searchMovies(keyword, genre, currentPage + 1);
    }
}

function prevPage(keyword, genre) {
    if (currentPage > 1) {
        searchMovies(keyword, genre, currentPage - 1);
    }
}

function handlePaginationButtons(totalPages) {
    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');
    prevButton.disabled = currentPage <= 1;
    nextButton.disabled = currentPage >= totalPages;
}

function searchMoviesEvent() {
    const keyword = document.getElementById('keyword').value;
    const genre = document.getElementById('genre').value || '';
    searchMovies(keyword, genre, 1);
}

function nextPageEvent() {
    const keyword = document.getElementById('keyword').value;
    const genre = document.getElementById('genre').value;
    nextPage(keyword, genre);
}

function prevPageEvent() {
    const keyword = document.getElementById('keyword').value;
    const genre = document.getElementById('genre').value;
    prevPage(keyword, genre);
}

function createListEvent(event) {
    event.preventDefault();
    const listName = document.getElementById('listName').value;
    const listDescription = document.getElementById('listDescription').value;
    createList(listName, listDescription);
}


function createMovieElement(movie, action) {
    if (!movie || !movie.id) return null;

    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
    movieElement.dataset.movieId = movie.id;

    const posterPath = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'ruta_a_imagen_por_defecto.jpg';
    movieElement.innerHTML = `
        <img src="${posterPath}" alt="${movie.title}" class="movie-poster">
        <h3 class="movie-title">${movie.title}</h3>
        <p class="movie-release-date">Año de lanzamiento: ${movie.release_date}</p>
        <p class="movie-overview">${movie.overview}</p>
        <p class="movie-vote-average">Puntuación: ${movie.vote_average}</p>
    `;

    return movieElement;
}

function displayPagination(totalPages, currentPage) {
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.classList.add('pagination-button');
        button.textContent = i;

        if (i === currentPage) {
            button.disabled = true;
        } else {
            button.addEventListener('click', function () {
                searchMovies(document.getElementById('keyword').value, i);
            });
        }

        paginationContainer.appendChild(button);
    }
}
async function loadGenres() {
    if (apiKey) {
        try {
            const genreResponse = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=es-ES`);
            const genreData = await genreResponse.json();
            const genreSelect = document.getElementById('genre');
            genreData.genres.forEach(genre => {
                const option = document.createElement('option');
                option.value = genre.id;
                option.textContent = genre.name;
                genreSelect.appendChild(option);
            });
        } catch (error) {
            console.error('Error al cargar géneros:', error);
        }
    } else {
        console.error('API Key no establecida. No se pueden cargar los géneros.');
    }
}

document.getElementById('searchButton').addEventListener('click', function () {
    const keyword = document.getElementById('keyword').value;
    const genre = document.getElementById('genre').value;
    if (keyword || genre) {
        searchMovies(keyword, genre, 1); // Inicia con la primera página
    } else {
        alert('Ingrese una palabra clave o seleccione un género para la búsqueda.');
    }
});

async function searchMovies(keyword, genre, page) {
    try {
        let url = '';
        if (genre) {
            url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es-ES&sort_by=popularity.desc&include_adult=false&page=${page}&with_genres=${genre}`;
            if (keyword) {
                url += `&query=${keyword}`;
            }
        } else {
            url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-ES&query=${keyword}&page=${page}&include_adult=false`;
        }

        const response = await fetch(url);
        const data = await response.json();
        currentPage = data.page;
        displayResults(data.results);
        handlePaginationButtons(data.total_pages);
    } catch (error) {
        console.error('Error al buscar películas:', error);
    }
}