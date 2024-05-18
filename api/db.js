import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'andrewsushi',
  host: 'localhost',
  database: 'books',
  password: 'sushi_balls',
  port: 5432,
});

export default pool;