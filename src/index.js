import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ quiet: true });

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("error", error);
    });
    app.listen(process.env.PORT || 7000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed", err);
  });

/*
import express from 'express'
const app = express()
( async () => {
try {
  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
  app.on('error', (error) => {
    console.log('err', error);
    throw error
    
  })
  app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
    
  })
} catch (error) {
  console.log("ERROR ", error);
  throw error
}
})()
*/
