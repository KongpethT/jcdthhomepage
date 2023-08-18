const express = require('./config/express')
const https = require('https')
const fs = require('fs')
const pem = require("pem")

const app = express()
const port = 80


const pfx = fs.readFileSync('public/ssl/jcdecaux.co.th.pfx')
console.log('Hello: ', pfx);

var options = {
    pfx: fs.readFileSync('public/ssl/jcdecaux.co.th.pfx'),
    passphrase: 'admin123'
}


https.createServer({
    key: fs.readFileSync('public/ssl/jcdecaux.co.th_key.key'),
    cert: fs.readFileSync('public/ssl/jcdecaux.co.th_crt.crt'),
}, app).listen(12443
    , () => {
        console.log('server is runing at https://localhost:8000')
    })



module.exports = app
