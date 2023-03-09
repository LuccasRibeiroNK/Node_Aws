import express from 'express';
import { createConnection } from 'mysql2';

const app = express();

// app.use(express.json());

const db = createConnection({
    host: "mysqlserver.cntsqjxnav68.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "admin123",
    database: "test"
});

db.query('SELECT * FROM books', (err, result) => {
    if (err) {  console.log(err); }
    else {  console.log(result); }
});


app.get('/books', (req, res) => {
    return res.send({message:'Books!'});
});

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

