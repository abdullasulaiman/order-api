"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./routes");
class App {
    constructor() {
        this.indexRoutes = new routes_1.Index();
        this.app = express();
        this.app.use(bodyParser.json());
        this.indexRoutes.routes(this.app);
    }
}
exports.default = new App().app;
