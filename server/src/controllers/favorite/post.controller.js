import { Favorite } from "../../database/conn.js";

const saveFavorite = async (req, res) => {
  try {
    const { UserId, CharacterId } = req.body;
    const favorite = await Favorite.findOne({
      where: {
        CharacterId,
        UserId,
      },
    });

    if (favorite)
      return res.status(400).json({
        message: "Personaje repetido en favoritos",
      });

    await Favorite.create({
      UserId,
      CharacterId,
    });

    return res.status(200).json({
      message: "Personaje agregado con éxito",
    });
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${error.message}`,
    });
  }
};

export default saveFavorite;
