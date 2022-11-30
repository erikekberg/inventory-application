const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActorSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  birthdate: {
    type: Date,
  },
  deathdate: {
    type: Date,
  },
  movies: {
    type: Array,
  },
});

const Actor = mongoose.model("actor", ActorSchema);
module.exports = Actor;
