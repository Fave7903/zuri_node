const fs = require('fs')
const http = require('http')

const server = http.createServer((req, res) => {
    var url = req.url
    if (url == '/') {
        fs.readFile('./home.html', (err, data) => {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end("404 Not Found");
              } 
              res.writeHead(200, {'Content-Type': 'text/html'});
              res.write(data);
              return res.end();
        })
    }
    else if (url == '/home') {
       res.writeHead(302, {
        'Location': '/'
       })
       return res.end()
    }
    if (url == '/about') {
        fs.readFile('./about.html', (err, data) => {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end("404 Not Found");
              } 
              res.writeHead(200, {'Content-Type': 'text/html'});
              res.write(data);
              return res.end();
        })
    }
    if (url == '/contact') {
        fs.readFile('./contact.html', (err, data) => {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end("404 Not Found");
              } 
              res.writeHead(200, {'Content-Type': 'text/html'});
              res.write(data);
              return res.end();
        })
    }
})

server.listen(5000, () => console.log('Server is running on port: 5000'))