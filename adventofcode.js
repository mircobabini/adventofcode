var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=UTF-8'
    });

    res.end('I wish you a merry Christmas.\n');

}).listen(9080, "");
