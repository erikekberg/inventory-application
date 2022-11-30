const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
});

const Genre = mongoose.model("genre", GenreSchema);

module.exports = Genre;
