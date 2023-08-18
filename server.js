const express = require('./config/express')
const https = require('https')
const fs = require('fs')
const pem = require("pem")
const http = require('http');
const app = express()

let port_ssl = 1244

if (process.env.NODE_ENV === 'development') {
    port_ssl = 443
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
}, app).listen(port_ssl, () => {
    console.log("Express TTP server listening on port " + port_ssl);
    console.log('server is runing at https://localhost:' + port_ssl)
})



module.exports = app
