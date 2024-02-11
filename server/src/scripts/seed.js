import axios from "axios";
import { Character } from "../database/conn.js";

const loader = async () => {
  try {
    const charactersDB = await Character.count({});
    if (charactersDB === 0) {
      let url_base = "https://rickandmortyapi.com/api/character";
      do {
        const { data } = await axios(url_base);
        const { results, info } = await data;
        const characters = results.map((character) => ({
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          gender: character.gender,
          image: character.image,
        }));
        await Character.bulkCreate(characters);
        url_base = info.next;
      } while (url_base);
    }
  } catch (error) {
    console.log(error);
  }
};

export default loader;
