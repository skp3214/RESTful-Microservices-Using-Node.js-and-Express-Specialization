const lodash = require("lodash");
let moviesList = require("../data/movies.json").movies;

const getMovies = (done) => {
  done(null, JSON.stringify(moviesList));
};

const getMoviesById = (movieId, done) => {
  const movie = moviesList.find(m => m.id === movieId);
  if (movie) {
    done(null, JSON.stringify(movie));
  } else {
    done("Requested movie doesn't exist..!");
  }
};

const saveMovie = (newMovie, done) => {
  const existingMovie = moviesList.find(m => m.id === newMovie.id);
  if (existingMovie) {
    done("Movie already exists..!");
  } else {
    moviesList.push(newMovie);
    done(null, JSON.stringify(moviesList));
  }
};

const updateMovie = (movieId, updateData, done) => {
  const movieIndex = moviesList.findIndex(m => m.id === movieId);
  if (movieIndex !== -1) {
    moviesList[movieIndex] = { ...moviesList[movieIndex], ...updateData };
    done(null, JSON.stringify(moviesList));
  } else {
    done("Requested movie doesn't exist..!");
  }
};

const deleteMovieById = (movieId, done) => {
  const movieIndex = moviesList.findIndex(m => m.id === movieId);
  if (movieIndex !== -1) {
    moviesList.splice(movieIndex, 1);
    done(null, JSON.stringify(moviesList));
  } else {
    done("Requested movie doesn't exist..!");
  }
};

module.exports = {
  getMovies,
  getMoviesById,
  saveMovie,
  updateMovie,
  deleteMovieById
};
