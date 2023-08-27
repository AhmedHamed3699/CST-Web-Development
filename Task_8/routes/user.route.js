import { Router } from 'express';
import userController from '../controllers/user.controller.js';
import { isAdminMiddleware } from '../middlewares/permissions.middleware.js';

const userRouter = Router();
userRouter.get('/', userController.user);
userRouter.get('s/', isAdminMiddleware, userController.findAll);
userRouter.get('s/:id', isAdminMiddleware, userController.findOne);
userRouter.delete('s/:id', isAdminMiddleware, userController.delete);

export default userRouter;