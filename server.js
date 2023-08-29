const express = require('./config/express')
const https = require('https')
const fs = require('fs')
const pem = require("pem")
const http = require('http');
const app = express()


var options = {
    pfx: fs.readFileSync('public/ssl/jcdecaux.co.th.pfx'),
    passphrase: 'admin123'
}



//http non security web site
http.createServer(app).listen(80, () => {
    console.log("Express TTP server listening on port 80");
    console.log('server is runing at http://localhost')
});

//https-security web site
https.createServer({
    key: fs.readFileSync('public/ssl/jcdecaux.co.th_key.key'),
    cert: fs.readFileSync('public/ssl/jcdecaux.co.th_crt.crt'),
}, app).listen(12443
    , () => {
        console.log("Express TTP server listening on port 12443");
        console.log('server is runing at https://localhost:12443')
    })



module.exports = app
