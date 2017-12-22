module.exports = function (app) {
    var document = require('../api/tby/document');
    app.use('/tby/api', document);
};