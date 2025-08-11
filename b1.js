var http = require('http');
var module = require('./module');

http.createServer(function(req, res) {
    var radius = Math.random() * 10; // Generate a random radius between 0 and 100
    var area = module.dientich(radius);
    var circumference = module.chuvi(radius);

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`Ban kinh: ${radius}\nDien tich: ${area}\nChu vi: ${circumference}`);
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');