import { movies } from "/JS/movies.js";

const urlParams = new URLSearchParams(window.location.search);
const movieId = parseInt(urlParams.get('id'));

const movie = movies[movieId];

const movieImg = document.querySelector('.movie-image');
movieImg.src = movie.imageSrc;


const movieTitle = document.querySelector('.movie-title');
movieTitle.textContent = movie.title;

const movieDescription = document.querySelector('.movie-description');
movieDescription.textContent = movie.description;