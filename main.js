const express = require('express');
const app = express();
const port = 8080;

// GET request handler for the root URL ('/')
app.get('/', function(req, res) {
    res.send("Hello World");
});

// POST request handler for a specific route ('/submit')
app.post('/submit', function(req, res) {
    // Handle the POST request here
    // You can access request data using req.body
    // For example: const formData = req.body;
    // Process the data and send an appropriate response
    console.log(" bodey : ", req);
    res.send("Received a POST request!");
});

app.listen(port, function() {
    console.log("Your app is running on port " + port);
});
