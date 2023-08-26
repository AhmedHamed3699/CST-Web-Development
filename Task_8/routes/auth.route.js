import { Router } from 'express';
import authController from '../controllers/auth.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const authRouter = Router();
authRouter.post('/signup', authController.signup);
authRouter.post('/login', authController.login);
authRouter.get('/me', authMiddleware, authController.me);

export default authRouter;