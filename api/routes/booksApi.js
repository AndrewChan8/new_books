import express from 'express';
import axios from 'axios';
import 'dotenv/config';

const router = express.Router();
const apiKey = process.env.API_KEY;

router.get('/', async (req, res) => {
  const searchQuery = req.query.q || 'best sellers';
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&orderBy=relevance&key=${apiKey}`
    );
    res.json(response.data.items || []);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching books');
  }
});

export default router;