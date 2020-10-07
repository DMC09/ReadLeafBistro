const express = require('express')
const app = express()
const port = process.env.PORT || 8080;
const path = require('path');

// Routes
app.use(express.static('/public'));
app.use('/images', express.static('public/images'))
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/html/index.html'));
});


// listening on port 8080
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
