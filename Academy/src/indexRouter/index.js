import { Router } from 'express';

import students from '../students/index';
import mentors from '../mentors/index';
import menagement from '../menagement/index'

const indexRouter = Router();

indexRouter.use(students.route);
indexRouter.use(mentors.route);
indexRouter.use(menagement.route);

export default indexRouter;