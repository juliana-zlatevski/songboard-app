import express from 'express';
const router = express.Router();

// POSTS routes (prefix added in index.js)
router.get('/', (req, res) => {
  res.send('THIS WORKS!');
})

export default router;