import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


mongoose.connect(process.env.MONGO).then(() => {//database ek hryt conect unada blnna then catch ekk use krnwa 
  console.log('Connected to MongoDB!');
}).catch((err) => {
  console.log(err);
});


const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000!!!");
});