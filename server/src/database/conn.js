import { Sequelize } from "sequelize";
import { UserModel, CharacterModel } from "../models/index.models.js";
const { URI_DATABASE } = process.env;
const conn = new Sequelize(URI_DATABASE, { logging: false, native: false });

UserModel(conn);
CharacterModel(conn);

const { Character } = conn.models;

export { conn, Character };
