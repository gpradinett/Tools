const express = require("express");
const cors = require("cors");
const http = require("http");

const app = express();

app.use(cors());
app.use(express.static(__dirname + "/public"));

app.get("/api/config", (req, res) => {
  const PATH_BACKEND1 =
    process.env.SERVICE_BACKEND1 || "http://localhost:19100/api/message";

  res.json({ pathBackend1: PATH_BACKEND1 });
});

app.get("/health", (req, res) => {
  res.send("OK");
});

app.use("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const port = process.env.PORT || 19000;

const server = http.createServer(app);
server
  .listen(port)
  .on("listening", () => console.log(`Listening on port ${port}`))
  .on("error", (err) => console.log(err));
