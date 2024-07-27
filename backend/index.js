import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from './config/db.js';
const PORT = 4000;
const app = express();

connectDB();

app.listen(PORT,()=>{
    console.log(`Server is running on port:${PORT}`);
})