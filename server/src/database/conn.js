import { Sequelize } from "sequelize";
import { UserModel, CharacterModel } from "../models/index.models.js";
import { URI_DATABASE } from "../config/global.js";
const conn = new Sequelize(URI_DATABASE, { logging: false, native: false });

UserModel(conn);
CharacterModel(conn);

const { Character, User } = conn.models;

User.belongsToMany(Character, { through: "User_Favorities_Characters" });
Character.belongsToMany(User, { through: "User_Favorities_Characters" });

export { conn, Character, User };
