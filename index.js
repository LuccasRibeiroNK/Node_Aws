require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const app = express();
const cors = require("cors");

app.use(cors());
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
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to database!");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/livros", (req, res) => {
  connection.query("SELECT * FROM livros", (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).send("Error querying database");
      return;
    }
    res.json(results);
  });
});

app.post("/livros", (req, res) => {
  const q =
    "INSERT INTO livros (`title`, `desc`, `price`, `cover` ) VALUES (?)";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  
  connection.query(q, [values], (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).send("Error querying database");
      return;
    }
    res.status(201).send("Livro criado com sucesso!");
  });
});

app.get("/portfolio", (req, res) => {
  connection.query("SELECT * FROM portfolio", (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).send("Error querying database");
      return;
    }
    res.json(results);
  });
});

app.listen(3333, () => {
  console.log("Server is running on port: 3333");
});
