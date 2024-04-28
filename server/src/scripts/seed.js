import axios from "axios";
import { Character, User } from "../database/conn.js";
import { PASSWORD_TEST, USER_TEST } from "../config/global.js";

const loader = async () => {
  try {
    const charactersDB = await Character.count({});
    const userDB = await User.count({});
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

    if (userDB === 0) {
      await User.create({
        email: USER_TEST,
        password: PASSWORD_TEST,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export default loader;
