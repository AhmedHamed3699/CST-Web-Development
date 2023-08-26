import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRouter from './routes/auth.route.js'
import authMiddleware from './middlewares/auth.middleware.js'
import adminRouter from './routes/admin.route.js'
import managerRouter from './routes/manager.route.js'
import userRouter from './routes/user.route.js'

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
app.use('/admin', authMiddleware, adminRouter);
app.use('/manager', authMiddleware, managerRouter);
app.use('/user', authMiddleware, userRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, err => {
    if (err) return console.error(err);
    console.log(`Server started listening at port ${PORT}`);
});