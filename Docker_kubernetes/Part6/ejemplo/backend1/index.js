const express = require("express");
const cors = require("cors");
const http = require("http");
const axios = require("axios");

const app = express();

app.use(cors());

app.get("/api/message", async (req, res) => {
  const PATH_BACKEND2 =
    process.env.SERVICE_BACKEND2 || "http://localhost:19200/api/message";

  const response = await axios.get(PATH_BACKEND2);
  const message1 = "Message from backend1";
  const message2 = response.data.message;

  res.json({
    message1,
    message2,
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

const port = process.env.PORT || 19100;

const server = http.createServer(app);
server
  .listen(port)
  .on("listening", () => console.log(`Listening on port ${port}`))
  .on("error", (err) => console.log(err));
