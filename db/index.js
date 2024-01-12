const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/movies")
  .then(() => {
    console.log("Connection open");
  })
  .catch((err) => {
    console.log("Error");
    console.log(err);
  });

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
  show: Boolean,
});

const Movie = mongoose.model("Movie", movieSchema);
const matrix = new Movie({
  title: "Matrix",
  year: 2000,
  score: 9.2,
  rating: "R",
  show: false,
});

matrix.save();
