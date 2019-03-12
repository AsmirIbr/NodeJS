import { Router } from 'express';
import actions from './actions';

const userRouter = Router();

userRouter.post('/users', actions.create);
userRouter.get('/users', actions.list);
userRouter.get('/users/:id', actions.get);
userRouter.put('/users/:id', actions.update);
userRouter.delete('/users/:id', actions.del);

export default userRouter;