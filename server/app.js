import express from "express";
const app = express();
import cors from "cors";
import bodyParser from "body-parser";

import products from "./routes/products.js";

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1", products);

export default app;
