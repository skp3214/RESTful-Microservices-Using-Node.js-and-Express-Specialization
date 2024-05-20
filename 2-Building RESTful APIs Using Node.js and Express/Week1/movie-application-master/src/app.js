// Import the required dependencies
const http = require("http");
const moviesService = require("./moviesService");
const getRequestData = require("./utils");

// Define the port at which the application will run
const PORT = 5000;

// Define the server
const server = http.createServer(async (req, res) => {
  if (req.url === "/movies" && req.method === "GET") {
    moviesService.getMovies((err, result) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: err }));
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(result);
      }
    });
  } else if (req.url.match(/\/movies\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[2];
    moviesService.getMoviesById(parseInt(id), (err, result) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: err }));
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(result);
      }
    });
  } else if (req.url === "/movies" && req.method === "POST") {
    const body = await getRequestData(req);
    const movie = JSON.parse(body);
    moviesService.saveMovie(movie, (err, result) => {
      if (err) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: err }));
      } else {
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(result);
      }
    });
  } else if (req.url.match(/\/movies\/([0-9]+)/) && req.method === "PUT") {
    const id = req.url.split("/")[2];
    const body = await getRequestData(req);
    const updateData = JSON.parse(body);
    moviesService.updateMovie(parseInt(id), updateData, (err, result) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: err }));
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(result);
      }
    });
  } else if (req.url.match(/\/movies\/([0-9]+)/) && req.method === "DELETE") {
    const id = req.url.split("/")[2];
    moviesService.deleteMovieById(parseInt(id), (err, result) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: err }));
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(result);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

// listen to the server on the specified port
server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.log("Port already in use");
  }
});
