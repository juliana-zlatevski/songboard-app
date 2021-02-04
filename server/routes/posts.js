import express from 'express';

import { getPosts } from '../controllers/posts.js';

const router = express.Router();

// POSTS ROUTES
router.get('/', getPosts);

export default router;