const { User } = require("../DB_Connection");
const postUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const newUser = {
        email,
        password,
      };
      const userCreated = await User.findOrCreate({
        where: { email },
        defaults: newUser,
      });
      return res.status(200).json(userCreated);
    }
    return res.status(400).send("Faltan datos");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = { postUser };
