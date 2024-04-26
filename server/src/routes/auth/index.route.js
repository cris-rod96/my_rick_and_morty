import { Router } from "express";
import { authControllers } from "../../controllers/index.controllers.js";

const router = Router();

router.post("/login", authControllers.login);

export default router;
