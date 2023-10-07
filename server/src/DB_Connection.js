require("dotenv").config();
const { Sequelize } = require("sequelize");
const UserModel = require("./models/User");
const CharacterModel = require("./models/Character");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false, native: false }
);

UserModel(sequelize);
CharacterModel(sequelize);

const { User, Character } = sequelize.models;

User.belongsToMany(Character, { through: "user_favorite" });
Character.belongsToMany(User, { through: "user_favorite" });

module.exports = {
  conn: sequelize,
  ...sequelize.models,
};
