import { Router } from 'express';
import actions from './actions';

const companyRouter = Router();

companyRouter.get('/company', actions.list);
companyRouter.get('/companyBetween', actions.getBetween);
companyRouter.get('/companyNBetween', actions.getNotBetween);
companyRouter.get('/companyLike', actions.getLike);
companyRouter.get('/companyNLike', actions.getNotLike);
companyRouter.get('/companyOR', actions.getOR);
companyRouter.post('/company', actions.create);
companyRouter.get('/company/:id', actions.getCompany);
companyRouter.delete('/company/:id', actions.del);
companyRouter.put('/company/:id', actions.update);
companyRouter.get('/company/:companyId/users/:id', actions.getUserFromCompany);

export default companyRouter;