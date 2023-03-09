const express = require('express');
const mysql = require('mysql');

const app = express();

app.use(express.json());

const db = mysql.createConnection({
    host: "mysqlserver.cntsqjxnav68.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "admin123",
    database: "test"
});

app.get("/", (req, res) => {
    res.json("Welcome to the application." );
});

// app.get('/', (req, res) => {
//     return res.send({message:'Server is running on port 3333'});
// });

// app.get('/atualizar', (req, res) => {
//     return res.send({message:'Atualizou mesmo para o nodemon!'});
// });

// app.post('/teste', (req, res) => {
//     const {name, date} = req.body;
//     return res.json({name, date});
// });

app.listen(3333, () => {
    console.log('Server is running on port 3333');
});

