import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

// POSTS ROUTES
router.get('/', getPosts);
router.post('/', createPost);

export default router;