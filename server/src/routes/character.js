const express = require("express");
const { getCharacter } = require("../controllers/getCharById");
const character = express.Router();

character.get("/:id", getCharacter);

module.exports = character;
