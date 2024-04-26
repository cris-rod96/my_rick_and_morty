import { Router } from "express";
import characterRoutes from "./character/index.route.js";
import favoriteRoutes from "./favorite/index.route.js";
import userRoutes from "./user/index.route.js";
import authRoutes from "./auth/index.route.js";
const router = Router();

router.use("/characters", characterRoutes);
router.use("/favorites", favoriteRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

export { router };
