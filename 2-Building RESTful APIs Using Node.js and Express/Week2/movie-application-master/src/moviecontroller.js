const movieservice=require('./movieservice');
// Controller method to save movie details
const saveMovieDetails = (movieDetails, done) => {
    movieservice.saveMovieDetails(movieDetails, done);
}

// Controller method to get all movies
const getMovies = (done) => {
    movieservice.getMovies(done);
}

// Controller method to get a movie by ID
const getMovieById = (movieId, done) => {
    movieservice.getMovieById(movieId, done);
}

// Controller method to update movie details
const updateMovieDetails = (movieId, movieDetails, done) => {
    movieservice.updateMovieDetails(movieId, movieDetails, done);
}

// Controller method to delete a movie by ID
const deleteMovieById = (movieId, done) => {
    movieservice.deleteMovieById(movieId, done);
}

module.exports = {
    getMovies,
    getMovieById,
    saveMovieDetails,
    updateMovieDetails,
    deleteMovieById
}
