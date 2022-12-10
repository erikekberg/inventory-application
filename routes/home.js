var express = require("express");
var router = express.Router();
const movieController = require("../controllers/movieController");
const genreController = require("../controllers/genreController");
const directorController = require("../controllers/directorController");

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();
const mongoDB = process.env.MONGODB;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

/* GET home page. */
router.get("/", movieController.index);

router.get("/movies", movieController.display_movies);

router.get("/movies/add", movieController.add_movie_form);

router.post("/movies/add", movieController.add_movie);

router.get("/movies/update/:id", movieController.update_movie_form);

router.post("/movies/update/:id", movieController.update_movie);

router.delete("/movies/delete/:id", movieController.delete_movie);

router.get("/movies/:id", movieController.movie_details);

router.get("/genres", genreController.display_genres);

router.get("/genres/add", genreController.add_genre_form);

router.post("/genres/add", genreController.add_genre);

router.get("/genres/update", genreController.update_genre_form);

router.get("/genres/delete", genreController.delete_genre);

router.get("/genres/:id", genreController.movies_in_genre);

router.get("/directors", directorController.display_directors);

router.get("/directors/:id", directorController.director_details);

router.get("/directors/add", directorController.add_director_form);

router.post("/directors/add", directorController.add_director);

router.get("/directors/update", directorController.update_director_form);

router.get("/directors/delete", directorController.delete_director);

module.exports = router;
