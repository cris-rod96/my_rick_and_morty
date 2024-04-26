import { Router } from "express";
import { favoriteControllers } from "../../controllers/index.controllers.js";

const router = Router();

router.get("/list/user/:id", favoriteControllers.getFavorites.getAllFavorites);
router.post("/save", favoriteControllers.saveFavorite);
router.delete("/delete", favoriteControllers.deleteFavorite);

export default router;
