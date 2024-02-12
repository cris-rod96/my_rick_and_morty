import { Router } from "express";
import { characterControllers } from "../../controllers/index.controllers.js";
const { getCharacters } = characterControllers;

const router = Router();

router.get("/list", getCharacters.allCharacters);
router.get("/view/:id", getCharacters.byID);
router.get("/search", getCharacters.byName);

export default router;
