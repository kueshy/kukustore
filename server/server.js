import app from "./app.js";
import connectDB from "./config/database.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";

dotenv.config({ path: "server/config/.env" });

//Connecting database
// connectDB();

mongoose
  .connect(process.env.MongoURI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Server connected to port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
      );
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
