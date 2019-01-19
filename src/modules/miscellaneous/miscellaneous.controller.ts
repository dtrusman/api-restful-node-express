import * as express from 'express';

import PackageApp from '../../../package.json';

export class MiscellaneousController {
    static getVersion = (request: express.Request, response: express.Response) => {
        const name = "API Restful";
        const version = PackageApp.version;

        return response
            .status(200)
            .json({ name, version });
    }

    static getPing(request: express.Request, response: express.Response) {
        return response.status(200).send("its working....");
    }
}