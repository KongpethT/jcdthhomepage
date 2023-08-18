const routing = require('../controller/index.controller')

module.exports = (app) => {
    app.get('/', routing.index)
    app.get('/contact/:id', routing.contact)
    app.get('/about', routing.about)
    app.get('/product', routing.product)
    app.get('/policy/:id', routing.policy)
}