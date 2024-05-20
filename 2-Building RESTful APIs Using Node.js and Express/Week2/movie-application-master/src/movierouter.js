const express = require("express");
const router = express.Router();
const movieController = require("./movieController");

// Route to get all movies
router.get("/", (req, res) => {
    movieController.getMovies((err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(results);
        }
    });
});

// Route to get a movie by ID
router.get("/:movieId", (req, res) => {
    const movieId = req.params.movieId;
    movieController.getMovieById(movieId, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(results);
        }
    });
});

// Route to save a new movie
router.post("/", (req, res) => {
    const movieDetails = req.body;
    movieController.saveMovieDetails(movieDetails, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(results);
        }
    });
});

// Route to update movie details
router.patch("/:movieId", (req, res) => {
    const movieId = req.params.movieId;
    const movieDetails = req.body;
    movieController.updateMovieDetails(movieId, movieDetails, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(results);
        }
    });
});

// Route to delete a movie by ID
router.delete("/:movieId", (req, res) => {
    const movieId = req.params.movieId;
    movieController.deleteMovieById(movieId, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(results);
        }
    });
});

module.exports = router;
