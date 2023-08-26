import { Router } from 'express';
import managerController from '../controllers/manager.controller.js';
import { isManagerMiddleware } from '../middlewares/permissions.middleware.js';

const managerRouter = Router();
managerRouter.get('/', isManagerMiddleware, managerController.manager);

export default managerRouter;