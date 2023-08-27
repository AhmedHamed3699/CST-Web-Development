import { Router } from 'express';
import userController from '../controllers/user.controller.js';
import { isAdminMiddleware } from '../middlewares/permissions.middleware.js';

const userRouter = Router();
userRouter.get('/', isAdminMiddleware, userController.findAll);
userRouter.get('/:id', isAdminMiddleware, userController.findOne);
userRouter.delete('/:id', isAdminMiddleware, userController.delete);

export default userRouter;