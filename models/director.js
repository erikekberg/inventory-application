const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DirectorSchema = new Schema({
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
  Movies: {
    type: Array,
  },
});

const Director = mongoose.model("director", DirectorSchema);