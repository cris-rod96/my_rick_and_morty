import { Op } from "sequelize";
import { Character } from "../../database/conn.js";
const allCharacters = async (req, res) => {
  try {
    const characters = await Character.findAll({});
    return res.status(200).json(characters);
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${error.message}`,
    });
  }
};
const byID = async (req, res) => {
  try {
    const { id } = req.params;
    const character = await Character.findOne({
      where: {
        id,
      },
    });
    return character
      ? res.status(200).json(character)
      : res.status(404).json({
          msg: `Character not found`,
        });
  } catch (err) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${err}`,
    });
  }
};

const byName = async (req, res) => {
  try {
    const { name } = req.query;
    const characters = await Character.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    return res.status(200).json(characters);
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${error.message}`,
    });
  }
};

export default { allCharacters, byID, byName };
