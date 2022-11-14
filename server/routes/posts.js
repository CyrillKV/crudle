import { Router } from "express";
import { getPosts, createPost, updatePost, deletePost, likePost } from "../controllers/posts.js";
//import auth from "../middleware/auth.js";

const router = Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);


export default router;
