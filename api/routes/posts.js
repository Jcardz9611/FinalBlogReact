import express from "express";
import {
    addPost,
    deletePost,
    getPost,
    getPosts,
    updatePost,
    downloadPost
} from "../controllers/post.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", addPost);
router.post("/:id", downloadPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

export default router;