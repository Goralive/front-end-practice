const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/shopApp")
  .then(() => {
    console.log("Connection open");
  })
  .catch((err) => {
    console.log("Error");
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: { type: Number },
  onSale: { type: Boolean },
});

const Product = mongoose.model("Product", productSchema);
const bike = new Product({
  name: "Bike!",
  price: 99,
  onSale: false,
});

bike
  .save()
  .then((data) => {
    console.log("Saved");
    console.log(data);
  })
  .catch((err) => {
    console.log(`Something go wrong ${err}`);
  });
