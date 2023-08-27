import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRouter from './routes/auth.route.js'
import authMiddleware from './middlewares/auth.middleware.js'
import userRouter from './routes/user.route.js'
import postRouter from './routes/post.route.js'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.DB_URI)
    .then(() =>
        console.log('Database is connected')
    ).catch(err => {
        if (err) return console.error(err);
    });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/auth', authRouter);
app.use('/user', authMiddleware, userRouter);
app.use('/posts', authMiddleware, postRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, err => {
    if (err) return console.error(err);
    console.log(`Server started listening at port ${PORT}`);
});