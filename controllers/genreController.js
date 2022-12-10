const Genre = require("../models/genre");
const Movie = require("../models/movie");

exports.display_genres = (req, res, next) => {
  Genre.find().exec((err, genres) => {
    if (err) {
      res.send(err);
    } else {
      res.render("genre_list", { genres: genres });
    }
  });
};

exports.add_genre_form = (req, res, next) => {
  res.render("add_or_update_genre");
};

exports.add_genre = (req, res, next) => {
  const genre = new Genre({
    name: req.body.name,
  });

  genre.save().catch((err) => res.send(err));
  res.redirect("/");
};

exports.update_genre_form = (req, res, next) => {
  //NEEDS TO BE DONE
  res.send("update genre form");
};

exports.delete_genre = (req, res, next) => {
  res.send("Deleting a genre");
};

exports.movies_in_genre = (req, res, next) => {
  Movie.find({ genres: req.params.id }).exec((err, movies) => {
    if (err) {
      res.send(err);
    } else {
      res.render("movie_list", { movies: movies });
    }
  });
};
