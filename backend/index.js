import express from 'express';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js'
import orderRoute from './routes/order.route.js'
import reviewRoute from './routes/review.route.js'
import conversationRoute from './routes/conversation.route.js'
import gigRoute from './routes/gig.route.js'
import messageRoute from './routes/message.route.js'
import authRoute from './routes/auth.route.js'
import cookieParser from 'cookie-parser';
dotenv.config();
import { connectDB } from './config/db.js';
const PORT = 4000;
const app = express();
app.use(express.json());
app.use(cookieParser()); 
connectDB();

//endpoints 
app.use('/api/user', userRoute)
app.use('/api/order', orderRoute)
app.use('/api/review', reviewRoute)
app.use('/api/gig', gigRoute)
app.use('/api/conversation', conversationRoute)
app.use('/api/message', messageRoute)
app.use('/api/auth', authRoute)

app.listen(PORT,()=>{
    console.log(`Server is running on port:${PORT}`);
})