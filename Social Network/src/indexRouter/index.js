import { Router } from 'express';

import users from '../users/index';
import posts from '../users/index';

const indexRouter = Router();

indexRouter.use(users.route);
indexRouter.use(posts.route)

export default indexRouter;