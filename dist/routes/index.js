"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Index {
    routes(app) {
        app.route('/index').get((req, res) => {
            res.status(200).send({ status: 'success' });
        });
    }
}
exports.Index = Index;
