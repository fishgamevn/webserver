// server.js
const http = require('http');

const hostname = '127.0.0.1'; // Localhost
const port = 3000; // Port number

// Create an HTTP server
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    // Handle GET requests
    res.statusCode = 200; // OK status
    res.setHeader('Content-Type', 'text/plain');
    res.end('Received a GET request!\n');
  } else if (req.method === 'POST') {
    // Handle POST requests
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });
    req.on('end', () => {
      res.statusCode = 200; // OK status
      res.setHeader('Content-Type', 'text/plain');
      console.log(" bodye -------_>>  ", body);
      res.end(`Received a POST request with data: ${body}\n`);
    });
  } else {
    // Handle other HTTP methods
    res.statusCode = 405; // Method Not Allowed
    res.end('Method not allowed!\n');
  }
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
