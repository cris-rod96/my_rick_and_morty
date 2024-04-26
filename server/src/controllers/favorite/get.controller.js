import { Character, Favorite } from "../../database/conn.js";

const getAllFavorites = async (req, res) => {
  const { id: UserId } = req.params;

  try {
    const favorites = await Favorite.findAll({
      where: {
        UserId,
      },
      include: [Character],
      attributes: {
        exclude: ["UserId", "CharacterId", "id"],
      },
    });

    return res.status(200).json(favorites);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export default { getAllFavorites };
