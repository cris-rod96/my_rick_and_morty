import { Sequelize } from "sequelize";
import {
  UserModel,
  CharacterModel,
  FavoriteModel,
} from "../models/index.models.js";
import { URI_DATABASE } from "../config/global.js";
const conn = new Sequelize(URI_DATABASE, { logging: false, native: false });

UserModel(conn);
CharacterModel(conn);
FavoriteModel(conn);

const { Character, User, Favorite } = conn.models;

User.hasMany(Favorite);
Favorite.belongsTo(User);

Character.hasMany(Favorite);
Favorite.belongsTo(Character);

export { conn, Character, User, Favorite };
