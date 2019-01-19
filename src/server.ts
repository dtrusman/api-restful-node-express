import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from "express";
import * as path from 'path';

import { getServerRouters } from './server-routes';

'use strict';

const server = express();

server.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", '*');
    response.header("Access-Control-Allow-Credentials", 'true');
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    response.header("Access-Control-Allow-Headers", "*");
    next();
});

// Enable cors
server.use(cors());

// Transform request.body to JSON format
server.use(bodyParser.json({ limit: "4mb" }));

// Body parse middleware 
server.use(bodyParser.urlencoded({
    parameterLimit: 50,
    limit: '20mb',
    extended: true
}));

// Initialize all routes
getServerRouters().forEach(routerItem => server.use(routerItem.path, routerItem.router));

// Serving Static Files
// server.use("/static", express.static(path.resolve("static")));

export { server }