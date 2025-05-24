import { Router } from "express";
import authRoutes from "./auth.routes.js";

const router = Router();

router.use("/api/v1/auth", authRoutes);


export default router;