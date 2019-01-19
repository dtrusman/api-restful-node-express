import * as express from 'express';

import { MiscellaneousController } from './modules/miscellaneous/miscellaneous.controller';

export const getServerRouters = () => {

    const routers = [];

    // Miscellaneous routes
    const miscellaneousRouter = express.Router();
    miscellaneousRouter.get('/version', MiscellaneousController.getVersion);
    miscellaneousRouter.get('/ping', MiscellaneousController.getPing);

    routers.push({path: '/miscellaneous/', router: miscellaneousRouter});

    return routers;
}