var express = require("express");
var router = express.Router();
const movieController = require("../controllers/movieController");
const actorController = require("../controllers/actorController");
const genreController = require("../controllers/genreController");
const directorController = require("../controllers/directorController");

const mongoDB = process.env.MONGODB;
console.log(mongoDB);

/* GET home page. */
router.get("/", movieController.index);

router.get("/movies", movieController.display_movies);

router.get("/movies/add", movieController.add_movie_form);

router.get("/movies/update", movieController.update_movie_form);

router.get("/movies/delete", movieController.delete_movie);

router.get("/actors", actorController.display_actors);

router.get("/actors/add", actorController.add_actor_form);

router.get("/actors/update", actorController.update_actor_form);

router.get("/actors/delete", actorController.delete_actor);

router.get("/genres", genreController.display_genres);

router.get("/genres/add", genreController.add_genre_form);

router.get("/genres/update", genreController.update_genre_form);

router.get("/genres/delete", genreController.delete_genre);

router.get("/directors", directorController.display_directors);

router.get("/directors/add", directorController.add_director_form);

router.get("/directors/update", directorController.update_director_form);

router.get("/directors/delete", directorController.delete_director);

module.exports = router;
