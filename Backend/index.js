const express = require('express')
const path = require('path')

const cors = require('cors')


const sentenceRoute = require('./routes/sentence.routes')
const app = express()
app.use(express.json())
app.use(
    express.urlencoded({
        extended: false,
    }),
)
app.use(cors())
// Static directory path
app.use(express.static(path.join(__dirname, 'dist/angular-mean-crud-tutorial')))
// API root
app.use('/api', sentenceRoute)
// PORT
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log('Listening on port ' + port)
})

// error handler
app.use(function (err, req, res, next) {
    console.error(err.message)
    if (!err.statusCode) err.statusCode = 500
    res.status(err.statusCode).send(err.message)
})