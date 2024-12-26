const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

// Connect to SQLite database
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Failed to connect to the database:', err.message);
    process.exit(1);
  }
  console.log('Connected to SQLite database.');
});

// Create a table and insert sample data (for testing)
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL
    )
  `);

  db.run(`INSERT OR IGNORE INTO users (name, email) VALUES
    ('Alice', 'alice@example.com'),
    ('Bob', 'bob@example.com')
  `);
});

// Define a simple route
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js + SQLite API!');
});

// Route to fetch data from the database
app.get('/users', (req, res) => {
  const query = 'SELECT * FROM users';
  db.all(query, [], (err, rows) => {
    if (err) {
      console.error('Error executing query:', err.message);
      res.status(500).send('Database query failed.');
    } else {
      res.json(rows); // Send the results as JSON
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
