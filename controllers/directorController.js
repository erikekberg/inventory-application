exports.display_directors = (req, res, next) => {
  res.send("displaying all directors");
};

exports.add_director_form = (req, res, next) => {
  res.send("add director form");
};

exports.update_director_form = (req, res, next) => {
  //NEEDS TO BE DONE
  res.send("update director form");
};

exports.delete_director = (req, res, next) => {
  res.send("Deleting a director");
};
