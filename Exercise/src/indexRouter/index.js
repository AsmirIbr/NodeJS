import { Router } from 'express';


import auth from '../auth/index';
import users from '../users/index';
import company from '../company/index';

const indexRouter = Router();

indexRouter.use('/auth', auth.route);
indexRouter.use(users.route);
indexRouter.use(company.route);

export default indexRouter;