import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "HOSPITAL MANAGEMENT SYSTEM",
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log(`some error occured while connecting to datbase: ${err}`);
    });
};
