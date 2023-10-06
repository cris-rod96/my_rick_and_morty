const { server } = require("../src/app");
const session = require("supertest");
const agent = session(server);

describe("Test de RUTAS", () => {
  const personaje1 = {
    id: 1,
    name: "Cristhian",
    status: "Ok",
  };
  const personaje2 = {
    id: 2,
    name: "Gabriel",
    status: "Off",
  };
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = await agent.get("/rickandmorty/character/1");
      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("name");
      expect(response.body).toHaveProperty("species");
      expect(response.body).toHaveProperty("gender");
      expect(response.body).toHaveProperty("status");
      expect(response.body).toHaveProperty("origin");
      expect(response.body).toHaveProperty("image");
    });
    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/character/2334433").expect(500);
    });
  });
  describe("GET /rickandmorty/login", () => {
    it("Si le pasa email y password obtengo el objeto access:true", async () => {
      const response = await agent.get(
        "/rickandmorty/login?email=crisrodam1996@gmail.com&password=a12b32*"
      );
      const query = response.body.access;
      expect(query).toBeTruthy();
    });
    it("Si le pasa email incorrecto o password incorrecta obtengo el objeto access:false", async () => {
      const response = await agent.get(
        "/rickandmorty/login?email=crisrodam1996@gmail.com&password=a122*"
      );
      const query = response.body.access;
      expect(query).toBeFalsy();
    });
  });
  describe("POST /rickandmorty/fav", () => {
    it("Lo que envíes por body debe ser devuelto en un arreglo", async () => {
      const { body } = await agent.post("/rickandmorty/fav").send(personaje1);

      expect(Array.isArray(body)).toBe(true);
      expect(body.length).toBe(1);
      expect(body).toContainEqual(personaje1);
    });
    it("Envio otro personaje y me devuelve el arreglo con el anterior incluido", async () => {
      const { body } = await agent.post("/rickandmorty/fav").send(personaje2);
      expect(Array.isArray(body)).toBe(true);
      expect(body.length).toBe(2);
      expect(body).toContainEqual(personaje1);
      expect(body).toContainEqual(personaje2);
    });
  });
  describe("DELETE /rickandmorty/fav/:id", () => {
    it("En el caso de que no haya ningún personaje con el ID que envías, sea un arreglo con los elementos previos sin modificar", async () => {
      const { body } = await agent.delete("/rickandmorty/fav/10");
      expect(body.length).toBe(2);
      expect(body).toContainEqual(personaje1);
      expect(body).toContainEqual(personaje2);
    });
    it("Cuando envías un ID válido se elimine correctamente al personaje", async () => {
      const { body } = await agent.delete("/rickandmorty/fav/2");
      expect(body.length).toBe(1);
      expect(body).toContainEqual(personaje1);
      expect(body).not.toContainEqual(personaje2);
    });
  });
});
