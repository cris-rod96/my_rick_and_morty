import server from "./src/server.js";
import { conn } from "./src/database/conn.js";
import loader from "./src/scripts/seed.js";
import { HOST_PORT } from "./src/config/global.js";
conn
  .sync({
    logging: false,
    force: false,
  })
  .then(() => {
    server.listen(HOST_PORT, () => {
      console.log(`Server listening in PORT: ${HOST_PORT}`);
    });
    console.log(`Database connected`);
    loader();
  })
  .catch((err) => {
    console.log(`Error en la conexion: ${err}`);
  });
