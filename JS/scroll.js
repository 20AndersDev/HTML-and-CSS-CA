const mostPopularMoviesDiv = document.querySelector('.div-mostpopular-movies');
const scrollLeftBtn = document.querySelector('.scroll-left');
const scrollRightBtn = document.querySelector('.scroll-right');

scrollLeftBtn.addEventListener('click', () => {
  mostPopularMoviesDiv.scroll({
    left: mostPopularMoviesDiv.scrollLeft - 300,
    behavior: 'smooth'
  });
  updateScrollButtonsVisibility();
});

scrollRightBtn.addEventListener('click', () => {
  mostPopularMoviesDiv.scroll({
    left: mostPopularMoviesDiv.scrollLeft + 300,
    behavior: 'smooth'
  });
  updateScrollButtonsVisibility();
});

function updateScrollButtonsVisibility() {
  if (mostPopularMoviesDiv.scrollLeft === 0) {
    scrollLeftBtn.style.backgroundColor = 'red';
  } else {
    scrollLeftBtn.style.backgroundColor = 'purple';
  }

  if (mostPopularMoviesDiv.scrollLeft >= (mostPopularMoviesDiv.scrollWidth - mostPopularMoviesDiv.clientWidth)) {
    scrollRightBtn.style.backgroundColor = 'red';
  } else {
    scrollRightBtn.style.backgroundColor = 'purple';
  }
}

updateScrollButtonsVisibility();