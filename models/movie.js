const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
  },
  director: {
    type: String,
  },
  actors: {
    type: Array,
  },
});

const Movie = mogoose.model("movie", MovieSchema);

module.exports = Movie;
