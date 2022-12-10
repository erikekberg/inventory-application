const Director = require("../models/director");
const Movie = require("../models/movie");

exports.display_directors = (req, res, next) => {
  Director.find().exec((err, directors) => {
    if (err) {
      res.send(err);
    } else {
      res.render("director_list", { directors: directors });
    }
  });
};

exports.add_director_form = (req, res, next) => {
  res.render("add_or_update_director");
};

exports.add_director = (req, res, next) => {
  const director = new Director({
    name: req.body.name,
    birthdate: req.body.birthdate,
    deathdate: req.body.deathdate ? req.body.birthdate : null,
  });

  director.save().catch((err) => res.send(err));

  res.redirect("/");
};

exports.director_details = (req, res, next) => {
  Director.findById(req.params.id).exec((err, director) => {
    if (err) {
      res.send(err);
    } else {
      Movie.find({ director: director.name }).exec((err, movies) => {
        if (err) {
          res.send(err);
        } else {
          res.render("director_details", {
            movies: movies,
            director: director,
          });
        }
      });
    }
  });
};

exports.update_director_form = (req, res, next) => {
  //NEEDS TO BE DONE
  res.send("update director form");
};

exports.delete_director = (req, res, next) => {
  res.send("Deleting a director");
};
