const { User } = require("../DB_Connection");

const login = async (req, res) => {
  try {
    const { email, password } = req.query;
    if (email && password) {
      const user = await User.findOne({ where: { email } });
      if (user) {
        if (user.password === password) {
          return res.status(200).json({
            access: true,
          });
        }
        return res.status(403).send("Contraseña incorrecta");
      }
      return res.status(404).send("Usuario no encontrado");
    }
    return res.status(400).send("Faltan datos");
  } catch ({ message }) {
    return res.status(500).send(message);
  }
};

module.exports = { login };
