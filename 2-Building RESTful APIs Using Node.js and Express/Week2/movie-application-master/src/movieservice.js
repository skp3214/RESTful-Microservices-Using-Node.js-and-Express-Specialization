// Import axios module for HTTP requests
const axios = require("axios");

// Method to save movie details
const saveMovieDetails = (movieDetails, done) => {
    axios.post(`http://localhost:3000/movies`, movieDetails)
        .then(response => {
            done(null, response.data);
        })
        .catch(error => {
            done(error);
        });
}

// Method to get all movies
const getMovies = (done) => {
    axios.get("http://localhost:3000/movies")
        .then(response => {
            done(null, response.data);
        })
        .catch(error => {
            done(error);
        });
}

// Method to get a movie by ID
const getMovieById = (movieId, done) => {
    axios.get(`http://localhost:3000/movies/${movieId}`)
        .then(response => {
            done(null, response.data);
        })
        .catch(error => {
            done(error);
        });
}

// Method to update movie details
const updateMovieDetails = (movieId, movieDetails, done) => {
    axios.patch(`http://localhost:3000/movies/${movieId}`, movieDetails)
        .then(response => {
            done(null, response.data);
        })
        .catch(error => {
            done(error);
        });
}

// Method to delete a movie by ID
const deleteMovieById = (movieId, done) => {
    axios.delete(`http://localhost:3000/movies/${movieId}`)
        .then(response => {
            done(null, response.data);
        })
        .catch(error => {
            done(error);
        });
}

module.exports = {
    getMovies,
    getMovieById,
    saveMovieDetails,
    updateMovieDetails,
    deleteMovieById
}
