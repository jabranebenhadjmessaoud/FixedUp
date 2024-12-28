import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import router from './routes/jobposts.route.js';
import router2 from './routes/apointments.route.js';
import router3 from './routes/client.route.js';
import router4 from './routes/worker.route.js';
import multer from 'multer';
import path from 'path';
import router5 from './routes/rate.route.js';
const app = express();

dotenv.config();
const PORT = process.env.PORT;

app.use(express.json(), cors());
console.log(`you are On server side port: ${PORT}`);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); 
    }
});

const upload = multer({ storage: storage });

app.post('/api/upload', upload.single('sticker'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    console.log(`File uploaded: ${req.file.filename}`);
    const filePath = req.file.path.replace('public/', '');
    res.status(200).send({ filePath });
});

app.use("/api",router)
app.use("/api",router2)
app.use("/api",router3)
app.use("/api",router4)
app.use("/api",router5)

app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);
dbConnect();
