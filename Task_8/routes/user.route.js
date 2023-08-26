import { Router } from 'express';
import userController from '../controllers/user.controller.js';

const userRouter = Router();
userRouter.get('/', userController.user);

export default userRouter;