const controller = require('./controller.js');

module.exports = (app) => {
    app.get('/author', controller.showall)
    app.get('/author/:id', controller.displayone);
    app.post('/author', controller.createnew);
    app.put('/author/:id', controller.updateauthor);
    app.delete('/author/:id', controller.delete)
}