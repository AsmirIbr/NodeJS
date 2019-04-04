import { Router } from 'express';
import actions from './actions';

const msgRouter = Router();

msgRouter.get('/msg', actions.list);
msgRouter.post('/msg', actions.create)

export default msgRouter;