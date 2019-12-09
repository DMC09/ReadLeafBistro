const express = require('express')
const app = express()

const port = process.env.PORT || 8080;
const routes = require('./routes.js');



// Routes
app.use("/", routes);
// static files folder
app.use(express.static('public'));
// template engine
app.set('view engine', 'pug')
// listening on port 8080
app.listen(port, () => console.log(`Example app listening on port ${port}!`))