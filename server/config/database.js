import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(process.env.MongoURI)
    .then(() => {
      console.log(`MongoDB connected and running successfully`);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;
