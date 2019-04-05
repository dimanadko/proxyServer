const http = require("http");

const onRequest = (client_req, client_res) => {
  console.log("serve: " + client_req.url);

  const options = {
    method: client_req.method,
    headers: client_req.headers
  };

  const proxy = http.request(client_req.url, options, res => {
    client_res.writeHead(res.statusCode, res.statusMessage, res.headers);
    res.pipe(
      client_res,
      {
        end: true
      }
    );
  });

  client_req.pipe(
    proxy,
    {
      end: true
    }
  );
};

module.exports = onRequest;
