const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

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
});

DirectorSchema.virtual("birth_date_formatted").get(function () {
  if (this.birthdate) {
    return DateTime.fromJSDate(this.birthdate).toLocaleString(
      DateTime.DATE_MED
    );
  }
});

DirectorSchema.virtual("death_date_formatted").get(function () {
  if (this.deathdate) {
    return DateTime.fromJSDate(this.deathdate).toLocaleString(
      DateTime.DATE_MED
    );
  }
});

const Director = mongoose.model("director", DirectorSchema);

module.exports = Director;
