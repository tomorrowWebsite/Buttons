var StaticServer = require("static-server");

var server = new StaticServer({
  rootPath: "./dist/",
  port: 5501,
});

server.start(function () {
  console.log("Server Started At Port ", server.port);
});
