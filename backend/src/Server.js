
const http = require('http');
const moment = require('moment');

const manager = {
    name: 'malachi',
    age: 4,
};

const empl = {
    name: 'tiffany',
    age: 29,
};


const textHeader = {'Access-Control-Allow-Origin': '*', 'Content-type': 'text/plain'};
const jsonHeader = {'Access-Control-Allow-Origin': '*', 'Content-type': 'application/json'};
const port = 8080;

/**
 * Create a simple server to serve an js object serialized into json
 * Use server for frontend
 */
http.createServer(function(req, res) {
    const url = req.url;
    console.log(`requested page ${url} at moment ` + moment().format());
    switch (url) {
    case '/managers':
        res.writeHead(200, jsonHeader);
        res.end(JSON.stringify(manager));
        break;

    case '/employees':
        res.writeHead(200, jsonHeader);
        res.end(JSON.stringify(empl));
        break;

    default:
        res.writeHead(404, textHeader);
        res.end('Sorry, this page is not supported.');
    }
}).listen(port, console.log(`Your server is running at port ${port}`));
