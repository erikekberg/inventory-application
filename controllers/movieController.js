const async = require("async");
const Movie = require("../models/movie");
const Genre = require("../models/genre");
const Director = require("../models/director");

exports.index = (req, res, next) => {
  res.render("homepage");
};

exports.display_movies = (req, res, next) => {
  Movie.find().exec((err, movies) => {
    if (err) {
      res.send(err);
    } else {
      res.render("movie_list", { movies: movies });
    }
  });
};

exports.add_movie_form = (req, res, next) => {
  async.parallel(
    {
      genres(callback) {
        Genre.find().exec((err, genres) => {
          if (err) {
            res.send(err);
          } else {
            callback(null, genres);
          }
        });
      },
      directors(callback) {
        Director.find().exec((err, directors) => {
          if (err) {
            res.send(err);
          } else {
            callback(null, directors);
          }
        });
      },
    },
    function (err, results) {
      if (err) {
        res.send(err);
      } else {
        res.render("add_or_update_movie", {
          genres: results.genres,
          directors: results.directors,
        });
      }
    }
  );
};

exports.add_movie = (req, res, next) => {
  const movie = new Movie({
    title: req.body.title,
    description: req.body.description,
    director: req.body.director,
    genres: req.body.genres,
    releaseyear: req.body.releaseyear,
  });
  movie.save().catch((err) => {
    res.status(400).send(err);
  });
  res.redirect("/");
};

exports.update_movie_form = (req, res, next) => {
  async.parallel(
    {
      movie_details(callback) {
        Movie.findById(req.params.id).exec((err, movie_details) => {
          if (err) {
            callback(err);
          } else {
            callback(null, movie_details);
          }
        });
      },
      genres(callback) {
        Genre.find().exec((err, genres) => {
          if (err) {
            res.send(err);
          } else {
            callback(null, genres);
          }
        });
      },
      directors(callback) {
        Director.find().exec((err, directors) => {
          if (err) {
            res.send(err);
          } else {
            callback(null, directors);
          }
        });
      },
    },
    function (err, results) {
      if (err) {
        res.send(err);
      } else {
        res.render("add_or_update_movie", {
          genres: results.genres,
          directors: results.directors,
          movie_details: results.movie_details,
        });
      }
    }
  );
};

exports.update_movie = (req, res, next) => {
  console.log(req.body);
  Movie.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      description: req.body.description,
      director: req.body.director,
      genres: req.body.genres,
      releaseyear: req.body.releaseyear,
    },
    (err, docs) => {
      if (err) {
        res.send(err);
      } else {
        res.redirect("/movies");
      }
    }
  );
};

exports.delete_movie = (req, res, next) => {
  Movie.findByIdAndDelete(req.params.id, (err, docs) => {
    if (err) {
      res.send(err);
    } else res.redirect("/");
  });
};

exports.movie_details = (req, res, next) => {
  Movie.findById(req.params.id).exec((err, details) => {
    if (err) {
      res.send(err);
    } else {
      console.log(details);
      res.render("movie_details", { details: details });
    }
  });
};
