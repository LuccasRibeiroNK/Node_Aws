const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.send({message:'Server is running on port 3333'});
});

app.get('/atualizar', (req, res) => {
    return res.send({message:'Atualizou mesmo para o nodemon!'});
});

app.post('/teste', (req, res) => {
    const {name, date} = req.body;
    return res.json({name, date});
});

app.listen(3333, () => {
    console.log('Server is running on port 3333');
});

// app.get('/', (req, res) => {
//    return res.send({message: 'server is running'});
//     });

// app.post('/teste', (req, res) => {
//     const {name, date} = req.body;
//     return res.json({name, date});
// });

// app.listen(3333);