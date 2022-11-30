const async = require("async");
const Movie = require("../models/movie");

exports.index = (req, res, next) => {
  res.render("homepage");
};

exports.display_movies = (req, res, next) => {
  res.render("movie_list");
};

exports.add_movie_form = (req, res, next) => {
  res.render("add_or_update_movie");
};

exports.update_movie_form = (req, res, next) => {
  //NEEDS TO BE DONE
  res.render("add_or_update_movie");
};

exports.delete_movie = (req, res, next) => {
  res.send("Deleting a movie");
};
