import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import router from './routes/jobposts.route.js';
import router2 from './routes/apointments.route.js';
const app = express();

const PORT = process.env.PORT;


app.use(express.json(), cors());
console.log(`you are On server side port: ${PORT}`);

app.use("/api",router)
app.use("/api",router2)

dotenv.config();






dbConnect();
