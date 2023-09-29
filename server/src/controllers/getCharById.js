const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(`${URL}/${id}`);
    console.log(data);
    if (data) {
      const character = {
        id,
        name: data.name,
        species: data.species,
        status: data.status,
        origin: data.origin,
        image: data.image,
        gender: data.gender,
      };
      return res.status(200).json(character);
    }
    return res.status(404).send("Character not found");
  } catch (err) {
    console.log("Entra");
    return res.status(500).send(err.message);
  }
};

// Sin express
// const getCharacter = (res, id) => {
//   axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(({ data }) => {
//       const character = {
//         id,
//         name: data.name,
//         gender: data.gender,
//         species: data.species,
//         origin: data.origin,
//         image: data.image,
//         status: data.status,
//       };
//       res.writeHead(200, "Content-Type: 'application/json'");
//       res.end(JSON.stringify(character));
//     })
//     .catch((err) => {
//       res.writeHead(500, "Content-Type: 'text/plain'");
//       res.end(err.message);
//     });
// };

module.exports = { getCharacter };
