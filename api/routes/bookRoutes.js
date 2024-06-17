import express from 'express';
const router = express.Router();
import { favoriteBook, unfavoriteBook, getFavoriteBooks } from '../controllers/bookController.js';

router.post('/favorite', favoriteBook);
router.post('/unfavorite', unfavoriteBook);
router.get('/:user_id/favorites', getFavoriteBooks);

export default router;
