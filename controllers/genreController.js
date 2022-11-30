exports.display_genres = (req, res, next) => {
  res.send("displaying all genres");
};

exports.add_genre_form = (req, res, next) => {
  res.send("add genre form");
};

exports.update_genre_form = (req, res, next) => {
  //NEEDS TO BE DONE
  res.send("update genre form");
};

exports.delete_genre = (req, res, next) => {
  res.send("Deleting a genre");
};
