import { User, Character } from "../../database/conn.js";

const add = async (req, res) => {
  try {
    const { userID, characterID } = req.body;
    const user = await User.findByPk(userID);
    if (user) {
      await user.addCharacter(characterID);
      await user.save();

      return res.status(200).json({
        msg: `Se ha agregado a los favoritos`,
      });
    }
    return res.status(401).json({
      msg: `User not found`,
    });
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${error.message}`,
    });
  }
};

const del = async (req, res) => {
  try {
    const { userID, characterID } = req.body;
    const user = await User.findByPk(userID);
    if (user) {
      await user.removeCharacter(characterID);
      await user.save();

      return res.status(200).json({
        msg: `El character ha sido eliminado con éxito de los favoritos`,
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el sevidor: ${error.message}`,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const { userID } = req.body;
    const { Characters } = await User.findOne({
      where: {
        id: userID,
      },
      include: [Character],
      attributes: {
        exclude: ["password", "id", "email", "createdAt", "updatedAt"],
      },
    });
    return res.status(200).json(Characters);
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidro: ${error.message}`,
    });
  }
};

export default { add, del, getAll };
