const { Character } = require("../DB_Connection");
const postFav = async (req, res) => {
  try {
    const { name, origin, species, status, image, gender } = req.body;
    if (name && origin && species && status && image && gender) {
      await Character.findOrCreate(req.body);
      const allCharacter = await Character.findAll();
      return res.status(200).json(allCharacter);
    }
    return res.status(401).send("Faltan datos");
  } catch (error) {}
};

module.exports = { postFav };
