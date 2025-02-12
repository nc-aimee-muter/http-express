const http = require("http");

const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "application/json");
  console.log(request.url);

  response.write(JSON.stringify({ msg: "hello world" }));
  response.end();
});
//   return {
//     get: (endpoint, func) => {
//       response.statusCode = 200;
//       func(request, response);
//     },
//     listen: server.listen,
//   };

// app.get("/", (req, res) => {
//   console.log("endpoint hit");
// });

server.listen(9090);
