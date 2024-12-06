import Database from 'better-sqlite3';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Open the database synchronously
const openDb = () => {
  try {
    const db = new Database('src/data/KoboReader.sqlite', { verbose: console.log });

    console.log('Database connection established.');
    return db;
  } catch (err) {
    // console.error('Failed to open database:', err.message);
    throw err;
  }
};

// Use the database
const db = openDb();

// Example route to fetch highlights
app.get('/highlights', (req, res) => {
  try {
    // const query = `SELECT * FROM Bookmarks`; // Replace 'highlights' with your table name
    // const highlights = db.prepare(query).all();
    const allRows = db.prepare('SELECT * FROM Bookmarks').all();
    console.log("🚀 ~ app.get ~ allRows:", allRows)
    res.json(allRows);
  } catch (err) {
    // console.error('Error fetching highlights:', err.message);
    res.status(500).json({ error: 'Failed to fetch highlights' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});