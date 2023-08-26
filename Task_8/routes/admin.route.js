import { Router } from 'express';
import adminController from '../controllers/admin.controller.js';
import { isAdminMiddleware } from '../middlewares/permissions.middleware.js';

const adminRouter = Router();
adminRouter.get('/', isAdminMiddleware, adminController.admin);

export default adminRouter;