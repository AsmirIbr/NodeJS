import { Router } from 'express';

import users from '../users/index';
import company from '../company/index';

const indexRouter = Router();

indexRouter.use(users.route);
indexRouter.use(company.route);

export default indexRouter;