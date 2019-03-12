import { Router } from 'express';
import actions from './actions';

const userRouter = Router();

userRouter.post('/users', actions.create);

export default userRouter;