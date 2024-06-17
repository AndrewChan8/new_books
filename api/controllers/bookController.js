import { pool } from '../db.js';

const favoriteBook = async (req, res) => {
  try {
    const { user_id, book_title, book_image, book_description, book_authors } = req.body;
    console.log(`Favoriting book for user ${user_id}: ${book_title}`);
    await pool.query(
      'INSERT INTO user_favorites (user_id, book_title, book_image, book_description, book_authors) VALUES ($1, $2, $3, $4, $5)',
      [user_id, book_title, book_image, book_description, book_authors]
    );
    res.json({ message: 'Book favorited' });
  } catch (err) {
    console.error('Error favoriting book:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const unfavoriteBook = async (req, res) => {
  try {
    const { user_id, book_title } = req.body;
    console.log(`Unfavoriting book for user ${user_id}: ${book_title}`);
    await pool.query(
      'DELETE FROM user_favorites WHERE user_id = $1 AND book_title = $2',
      [user_id, book_title]
    );
    res.json({ message: 'Book unfavorited' });
  } catch (err) {
    console.error('Error unfavoriting book:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getFavoriteBooks = async (req, res) => {
  try {
    const { user_id } = req.params;
    console.log(`Fetching favorite books for user: ${user_id}`);
    const result = await pool.query(
      'SELECT book_title, book_image, book_description, book_authors FROM user_favorites WHERE user_id = $1',
      [user_id]
    );
    console.log(`Favorites fetched from DB:`, result.rows);
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching favorite books:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { favoriteBook, unfavoriteBook, getFavoriteBooks };
