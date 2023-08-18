const routing = require('../controller/index.controller')

module.exports = (app) => {
    app.get('/', routing.index)
    app.get('/contact/:id', routing.contact)
    app.get('/about', routing.about)
    app.get('/product', routing.product)
    app.get('/policy/:id', routing.policy)
    app.get('/pdpa', (req, res) => { res.redirect('https://www.jcdecaux.co.th/policy/internal') })
    app.get('/mfa', (req, res) => { res.redirect('https://aka.ms/mfasetup') })
    app.get('/kis', (req, res) => { res.redirect('https://kis.jcdecaux.com/') })
    app.get('/leave', (req, res) => { res.redirect('https://jcdecaux.leaveonline.com/') })
    app.get('/admin365', (req, res) => { res.redirect('https://outlook.office365.com/ecp') })
    app.get('/email/junk', (req, res) => { res.redirect('https://eu.quarantine.symantec.com') })
    app.get('/helpdesk', (req, res) => { res.redirect('https://sgsin0ap0019:8080') })
}