import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';

const app = express();

const PORT = process.env.PORT;


app.use(express.json(), cors());
console.log(`you are On server side port: ${PORT}`);

// app.use("/api",router)


dotenv.config();






dbConnect();
