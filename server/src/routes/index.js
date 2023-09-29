const router = require("express").Router();

const { getCharacter } = require("../controllers/getCharById");
const { postFav, deleteFav } = require("../controllers/handleFavorite");
const { loginUser } = require("../controllers/login");

router.get("/character/:id", getCharacter);
router.get("/login", loginUser);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
