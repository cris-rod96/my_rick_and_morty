// CON HTTP
// const http = require("http");
// const { getCharacter } = require("./controllers/getCharById");
// const characters = require("./utils/data");

// CON EXPRESS
const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 3005;
const index = require("./routes/index");
const character = require("./routes/character");
// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type,Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,PUT,DELETE");
  next();
});

// Rutas
app.use("/rickandmorty", index);

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     const { url } = req;

//     if (url.includes("/rickandmorty/character")) {
//       const id = url.split("/").pop();
//       getCharacter(res, id);
//       //   const character = characters.find((char) => char.id === Number(id));

//       //   if (character) {
//       //     res.writeHead(200, "Content-Type: 'application/json'");
//       //     res.end(JSON.stringify(character));
//       //   } else {
//       //     res.writeHead(404, "Content-Type: 'text/plain'");
//       //     res.end("Personaje no encontrado");
//       //   }
//     }
//   })
//   .listen(PORT, "127.0.0.1");

app.listen(PORT, () => {
  console.log(`Server raised in port ${PORT}`);
});
