exports.display_actors = (req, res, next) => {
  res.send("displaying actors");
};

exports.add_actor_form = (req, res, next) => {
  res.render("add_or_update_actor");
};

exports.update_actor_form = (req, res, next) => {
  res.render("add_or_update_actor");
};

exports.delete_actor = (req, res, next) => {
  res.send("delete actor");
};
