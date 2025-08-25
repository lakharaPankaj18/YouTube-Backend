import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ quiet: true });

connectDB();

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
