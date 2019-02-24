import { Router } from 'express';
import actions from './actions';

const postRouter = Router();

postRouter.get('/users/posts', actions.list);
postRouter.get('/users/:id/posts/:postid', actions.get);
postRouter.post('/users/:id/posts', actions.create);
postRouter.put('/users/:id/posts/:postid', actions.update);
postRouter.delete('/users/:id/posts/:postid', actions.del);

export default postRouter;