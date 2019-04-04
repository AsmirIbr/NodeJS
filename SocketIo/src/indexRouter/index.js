import { Router } from 'express';

import msg from '../msg/index';

const indexRouter = Router();

indexRouter.use(msg.route)

export default indexRouter;