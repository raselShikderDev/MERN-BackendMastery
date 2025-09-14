import { Router } from "express";
import { authController } from "./auth.controller";

const router = Router()

router.post("/login", authController.loginWithPassword)
router.post("/google-login", authController.authWithGoolge)

export const authRouter = router