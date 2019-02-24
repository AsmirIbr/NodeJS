import { Router } from 'express';
import actions from './actions';

const userRouter = Router();

userRouter.get('/users', actions.list);
userRouter.get('/users/:id', actions.get);
userRouter.post('/users', actions.create);
userRouter.put('/users/:id', actions.update);
userRouter.delete('/users/:id', actions.del);

export default userRouter;