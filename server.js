const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("/certs/mysite.key"),
  cert: fs.readFileSync("/certs/mysite.crt")
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end("Hello from Docker Compose on port 4440 with custom CA!");
}).listen(4440, () => {
  console.log("HTTPS server running on port 4440");
});
