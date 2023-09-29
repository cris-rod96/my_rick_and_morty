const users = require("../utils/users");
const loginUser = (req, res) => {
  const { email, password } = req.query;

  const filteredUser = users.find(
    (user) => user.email === email && user.password === password
  );

  filteredUser
    ? res.status(200).json({ access: true })
    : res.status(200).json({ access: false });
};

module.exports = { loginUser };
