import http = require('http');
import {Server} from "http";

function start() {
    var server:Server = http.createServer(function(request:any, response:any){
        response.statusCode = 200;
        response.setHeader('Content-type', 'text/plain');
        response.write('Hello, TypeScript!');
        response.end();
    });
    server.listen(8080);
    console.log("open http://localhost:8080/")
}

start();