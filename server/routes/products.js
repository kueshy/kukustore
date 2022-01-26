import express from "express";
const router = express.Router();

import {
  getProductDetails,
  getProducts,
} from "../controllers/productsController.js";

router.get("/products", getProducts);
router.get("/product/:id", getProductDetails);

export default router;
