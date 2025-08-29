import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './config/db.js';
import route from './routes/route.js';

dotenv.config();
const app = express()
const port = process.env.PORT

app.use(cors());
app.use(express.json());

// Test database connection
db.connect((err) => {
    if (!err) {
        console.log("Database Connected Successfully");
    } else {
        console.log("Database Connection Failed:", err);
    }
})

app.use('/api', route);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
