const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.send('Server is running');
});

app.post('/teste', (req, res) => {
    const {name, date} = req.body;
    return res.json({name, date});
});



app.listen(3333);

// app.get('/', (req, res) => {
//    return res.send({message: 'server is running'});
//     });

// app.post('/teste', (req, res) => {
//     const {name, date} = req.body;
//     return res.json({name, date});
// });

// app.listen(3333);