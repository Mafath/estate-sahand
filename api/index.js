import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import userRouter from './routes/user.route.js'; // Importing user routes
import authRouter from './routes/auth.route.js'; // Importing auth routes


mongoose.connect(process.env.MONGO).then(() => {//database ek hryt conect unada blnna then catch ekk use krnwa 
  console.log('Connected to MongoDB!');
}).catch((err) => {
  console.log(err);
});


const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000!!!");
});

app.use("/api/user", userRouter); // Using user routes
app.use("/api/auth", authRouter); // Using user routes
