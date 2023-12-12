require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')

const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

//config template engine ,static files
configViewEngine(app);

//khai bao route
app.use('/', webRoutes);

//test connection


// simple query
connection.query(
    'SELECT  * FROM Users u',
    function (err, results, fields) {
        console.log(">>>results:", results); // results contains rows returned by server
    }
);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})