import Product from "../models/Product.js";

export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();

    res.send(products);
  } catch (error) {
    console.log(error.message);
  }
};

export const getProductDetails = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
  }
};
