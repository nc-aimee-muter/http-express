const http = require("http");

// port is 9090 by default

class Express {
  constructor() {
    this.port = 9090;
    //this.endpoints = {};
  }

  // try write a function to set up createServer

  //   server = http.createServer((request, response) => {});
  get(endpoint, callback) {
    const server = http.createServer((request, response) => {
      response.send = (data) => {
        const dataType =
          typeof data === "string" ? "text/plain" : "application/json";
        response.setHeader("Content-Type", dataType);
        const formattedData =
          typeof data === "string" ? data : JSON.stringify(data);
        response.write(formattedData);
        response.end();
      };
      if (request.url === endpoint) {
        callback(request, response);
      }
    });
    server.listen(this.port);
    // if endpoint matches request, trigger callback
    // invoke their callback with the request and response
    // add a send function to response
  }
  post(endpoint, callback) {}
  patch(endpoint, callback) {}
  delete(endpoint, callback) {}
  listen(port) {
    this.port = port;
  }
}

const app = new Express();
app.listen(8080);
app.get("/", (req, res) => res.send({ msg: "hello world" }));
// app.get("/books", (req, res) =>
//   res.send({ books: ["book1", "book2", "book3"] })
// );

// tried to extract server out above and set global req and res
// tried to put my class inside the createServer
// not sure what to try or which method is worth persuing
