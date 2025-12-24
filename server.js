const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("/certs/mysite.key"),
  cert: fs.readFileSync("/certs/mysite.crt")
};

const PORT = process.env.PORT || 4440;

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end("Hello from Docker Compose on port 4440 with custom CA!");
}).listen(PORT, () => {
  console.log(`HTTPS server running on port ${PORT}`);
});
