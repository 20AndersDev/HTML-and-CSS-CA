import { movies } from "/JS/movies.js";

const listOfVideos = document.querySelector('.div-list-of-videos-movies');
const actionButton = document.querySelector('#action');
const allButton = document.querySelector('#all');
const ulGenreMenu = document.querySelector('.ul-genre-menu');

function createMovieMarkup(movie, index) {
  const movieDiv = document.createElement('div');
  movieDiv.classList.add('div-movie');

  const movieLink = document.createElement('a');
  movieLink.href = `productpage.html?id=${index}`;

  const movieImg = document.createElement('img');
  movieImg.src = movie.imageSrc;
  movieImg.alt = `Movie poster - ${movie.title}`;
  movieImg.classList.add('movie');

  const movieTitleDiv = document.createElement('div');
  movieTitleDiv.classList.add('div-movie-title');

  const movieTitle = document.createElement('h2');
  movieTitle.classList.add('movie-title');
  movieTitle.textContent = movie.title;

  movieLink.appendChild(movieImg);
  movieTitleDiv.appendChild(movieTitle);

  movieDiv.appendChild(movieLink);
  movieDiv.appendChild(movieTitleDiv);

  return movieDiv;
}

function displayMovies(moviesArray, filterFunction = movie => true) {
  listOfVideos.innerHTML = '';
  moviesArray.filter(filterFunction).forEach((movie, index) => {
    const movieMarkup = createMovieMarkup(movie, index);
    listOfVideos.appendChild(movieMarkup);
  });
}

// Display all movies by default
displayMovies(movies);

actionButton.addEventListener('click', () => {
  displayMovies(movies, movie => movie.action);
  ulGenreMenu.style.display = 'none';

});

allButton.addEventListener('click', () => {
  displayMovies(movies);
  ulGenreMenu.style.display = 'none';
});