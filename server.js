const onRequest = require("./requestHandler");
const http = require("http");


const server = http.createServer(onRequest);

module.exports = server;
