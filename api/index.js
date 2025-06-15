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

//middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message
  }); //statusCode : statusCode kyla thama mehi ennona. but es6 ekt psse key ekai valui ektai ekama nama tynwn nm mehem key ek witrk danna plwn. message ekth ehemmai krl tyenne
});