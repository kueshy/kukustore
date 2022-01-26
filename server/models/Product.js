import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
    default: 0.0,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  stock: {
    type: Number,
    default: 0,
  },
  seller: {
    type: String,
  },
  category: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
