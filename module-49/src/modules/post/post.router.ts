import { Router } from "express";
import { postController } from "./post.controller";


const router = Router()



router.post("/", postController.createPost)
router.get("/all", postController.getAllPost)
router.get("/stats", postController.getPostStats)
router.get("/:id", postController.getPost)
router.patch("/:id", postController.updatePost)
router.delete("/:id", postController.deletePost)



export const postRouter = router