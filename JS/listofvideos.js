import { movies } from "/JS/movies.js";

const listOfVideos = document.querySelector('.div-list-of-videos-movies');


movies.forEach((movie, index) => {
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
  
    listOfVideos.appendChild(movieDiv);
  });