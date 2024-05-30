import { pool } from '../db.js';

const favoriteBook = async (req, res) => {
  try {
    const { user_id, book_title, book_image } = req.body;
    await pool.query(
      'INSERT INTO user_favorites (user_id, book_title, book_image) VALUES ($1, $2, $3)',
      [user_id, book_title, book_image]
    );
    res.json({ message: 'Book favorited' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const unfavoriteBook = async (req, res) => {
  try {
    const { user_id, book_title } = req.body;
    await pool.query(
      'DELETE FROM user_favorites WHERE user_id = $1 AND book_title = $2',
      [user_id, book_title]
    );
    res.json({ message: 'Book unfavorited' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getFavoriteBooks = async (req, res) => {
  try {
    const { user_id } = req.params;
    const result = await pool.query(
      'SELECT book_title, book_image FROM user_favorites WHERE user_id = $1',
      [user_id]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { favoriteBook, unfavoriteBook, getFavoriteBooks };
