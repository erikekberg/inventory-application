var express = require("express");
var router = express.Router();
const movieController = require("../controllers/movieController");

/* GET home page. */
router.get("/", movieController.index);

router.get("/movies", movieController.display_movies);

router.get("/movies/add", movieController.add_movie_form);

router.get("/movies/update", movieController.update_movie_form);

router.get("/movies/delete", movieController.delete_movie);

module.exports = router;
