const express = require('express')
let path = require('path')
const bodyParser = require('body-parser')
const expressLayout = require('express-ejs-layouts')
const ejs = require('ejs')
const isState = process.env.NODE_ENV
module.exports = () => {
    const app = express()
    if (isState === 'development') {
        app.use(require('morgan')('dev'))
        console.log(isState)
    } else {
        app.use(require('compression'))
        console.log(isState)
    }
    //app.set('views', './view')
    //app.set('view engine', 'ejs')



    app.use(expressLayout)
    app.set('layout', './layout/template')
    app.set('views', './view')
    app.set('view engine', 'ejs')


    app.use(express.static(path.join(__dirname, '../public')));

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

    require('../app/router/index.router')(app)



    


    return app
}