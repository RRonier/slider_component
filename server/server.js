const http = require("http");
const app = require("./app/App");
const server = http.createServer(app);

server.listen(8080, () => console.log("Application listening on port 8080"));
