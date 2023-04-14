const message1 = document.getElementById("message1");
const message2 = document.getElementById("message2");

const API_CONFIG = "/api/config";

fetch(API_CONFIG)
  .then((response) => response.json())
  .then((data) => {
    const PATH_BACKEND1 = data.pathBackend1;
    fetch(PATH_BACKEND1)
      .then((response) => response.json())
      .then((msg) => {
        message1.innerHTML = msg.message1;
        message2.innerHTML = msg.message2;
      });
  });
