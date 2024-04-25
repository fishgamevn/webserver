const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = 8080;

// GET request handler for the root URL ('/')
app.get('/', function(req, res) {
    res.send("Hello World");
});

// POST request handler for a specific route ('/submit')
app.post('/submit', function(req, res) {
    let data = req.body;
    console.log(data.msg);
    res.send('Data Received: ' + JSON.stringify(data));
});

app.listen(port, function() {
    console.log("Your app is running on port " + port);
});
