const { Character } = require("../DB_Connection");

const deleteFav = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      await Character.destroy({ where: { id } });
      const allCharacters = await Character.findAll();
      return res.status(200).json(allCharacters);
    }
    return res.status(401).send("Faltan datos");
  } catch ({ message }) {
    return res.status(500).send(message);
  }
};

module.exports = { deleteFav };
