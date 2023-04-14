import express from "express";
import http from "http";

const app = express();

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

const server = http.createServer(app);

server.listen(3000, () => console.log("Server is running"));
