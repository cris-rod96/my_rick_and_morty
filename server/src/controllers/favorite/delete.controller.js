import { Favorite } from "../../database/conn.js";

const deleteFavorite = async (req, res) => {
  try {
    const { UserId, CharacterId } = req.query;
    console.log(UserId, CharacterId);
    const favorite = await Favorite.findOne({
      where: {
        UserId,
        CharacterId,
      },
    });
    if (!favorite)
      return res.status(400).json({
        message: "Personaje en favoritos no encontrado",
      });

    await Favorite.destroy({
      where: {
        UserId,
        CharacterId,
      },
    });

    return res.status(200).json({
      msg: `El personaje ha sido eliminado con éxito de los favoritos`,
    });
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el sevidor: ${error.message}`,
    });
  }
};

export default deleteFavorite;
