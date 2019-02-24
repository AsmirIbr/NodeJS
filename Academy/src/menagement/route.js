import { Router } from 'express';
import actions from './actions';

const menagementRouter = Router();

menagementRouter.get('/menagement', actions.list);
menagementRouter.get('/menagement/:id', actions.get);
menagementRouter.post('/menagement', actions.create);
menagementRouter.put('/menagement/:id', actions.update);
menagementRouter.delete('/menagement/:id', actions.del);

export default menagementRouter;