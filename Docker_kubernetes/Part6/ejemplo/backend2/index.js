const express = require("express");
const cors = require("cors");
const http = require("http");

const app = express();

app.use(cors());

app.get("/api/message", async (req, res) => {
  const message = "Message from backend2";

  res.json({
    message,
  });
});

app.get("/health", (req, res) => {
  res.send("OK");
});

app.get("/", (req, res) => {
  res.send("OK");
});

app.use("*", (req, res) => {
  res.status(404).send("Not found");
});

const port = process.env.PORT || 19200;

const server = http.createServer(app);
server
  .listen(port)
  .on("listening", () => console.log(`Listening on port ${port}`))
  .on("error", (err) => console.log(err));
