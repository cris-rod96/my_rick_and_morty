import { Router } from "express";
import { favoriteControllers } from "../../controllers/index.controllers.js";

const router = Router();

router.get("/list", favoriteControllers.getAll);
router.post("/add", favoriteControllers.add);
router.delete("/del", favoriteControllers.del);

export default router;
