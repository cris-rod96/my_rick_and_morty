import { Sequelize } from "sequelize";
import {
  UserModel,
  CharacterModel,
  FavoriteModel,
} from "../models/index.models.js";
import { DB_URI } from "../config/global.js";
const conn = new Sequelize(DB_URI.URI, DB_URI.CONFIG);

UserModel(conn);
CharacterModel(conn);
FavoriteModel(conn);

const { Character, User, Favorite } = conn.models;

User.hasMany(Favorite);
Favorite.belongsTo(User);

Character.hasMany(Favorite);
Favorite.belongsTo(Character);

export { conn, Character, User, Favorite };
