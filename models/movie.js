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
    type: Schema.Types.ObjectId,
    ref: "Director",
  },
  actors: {
    type: Array,
  },
});

const Movie = mongoose.model("movie", MovieSchema);

module.exports = Movie;
