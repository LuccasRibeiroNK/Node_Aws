require('dotenv').config();
//require express
const express = require('express');
const mysql = require('mysql2');
const app = express();

app.use(express.json());

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbDatabase = process.env.DB_DATABASE;

const connection = mysql.createConnection({
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbDatabase,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database!');
});

app.get('/PRODUTOS', (req, res) => {
  connection.query('SELECT * FROM PRODUTO', (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).send('Error querying database');
      return;
    }
    res.json(results);
  });
});

app.listen(3333, () => {
    console.log('Server is running on port 3333');
});

