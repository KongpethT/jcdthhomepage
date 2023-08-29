const express = require('./config/express')

const app = express()
const port = 3000
app.listen(port, () => {
    console.log('server is running at http://localhost:'+ port)
})

module.exports = app
