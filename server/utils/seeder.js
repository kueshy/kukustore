import Product from "../models/Product.js";
import dotenv from "dotenv";
import products from "../data/products.json";
import connectDB from "../config/database.js";

import { readFile } from "fs/promises";

// const products = JSON.parse(await readFile("../data/products.json"));

dotenv.config({ path: "server/config/.env" });
connectDB();

const seedData = async () => {
  try {
    await Product.deleteMany();
    console.log("Products deleted successfully");

    await Product.insertMany(products);
    console.log("Products inserted successfully");
    process.exit();
  } catch (error) {
    console.log(error.message);
  }
};

seedData();
