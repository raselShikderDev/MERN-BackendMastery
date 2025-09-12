import { Router } from "express";
import { userController } from "./user.controller";

const router = Router()

router.post("/", userController.createUser)
router.get("/all", userController.getAllUser)
router.get("/:id", userController.getUser)
router.patch("/:id", userController.updateUser)
router.delete("/:id", userController.deleteUser)

export const userRouter = router