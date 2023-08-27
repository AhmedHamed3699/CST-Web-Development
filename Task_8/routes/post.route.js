import { Router } from 'express';
import postController from '../controllers/post.controller.js';
import { canDeleteMiddleware, isUserMiddleware,  } from '../middlewares/permissions.middleware.js';


const postRouter = Router();
postRouter.post('/create', isUserMiddleware, postController.create);
postRouter.get('/', postController.findAll);
postRouter.get('/:id', postController.findOne);
postRouter.delete('/:id', canDeleteMiddleware, postController.delete);

export default postRouter;