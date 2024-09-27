const express = require('express');

const port = 9012;


const db = require('./cofig/mongoose');

const app = express();


app.use(express.json());

app.use('/quiz', require('./routes/quiz'));



app.listen(port, (err) => {
    (err) ? console.log("server is connect ") : console.log("server is connect");

})