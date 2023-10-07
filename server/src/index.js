const { conn } = require("./DB_Connection");
const { server } = require("./app");
const PORT = 3000;
server.listen(PORT, async () => {
  await conn.sync({ force: true });
  console.log(`Server raised in port ${PORT}`);
});
