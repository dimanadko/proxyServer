const onRequest = require("./requestHandler");
const http = require("http");
const https = require("https");
//
// const options = {
//   key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
//   cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
// };


const server = http.createServer(onRequest);
// const server_sec = https.createServer(options, onRequest);
// server.on("request", value => console.log(value));

module.exports = server;
