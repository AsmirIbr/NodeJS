import { Router } from 'express';
import actions from './actions';

const mentorRouter = Router();

mentorRouter.get('/mentors', actions.list);
mentorRouter.get('/mentors/:id', actions.get);
mentorRouter.post('/mentors', actions.create);
mentorRouter.put('/mentors/:id', actions.update);
mentorRouter.delete('/mentors/:id', actions.del);

export default mentorRouter;
