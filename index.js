const express = require('express');
const app = express();

//Cria um objeto data
let data = new Date();

//importa o arquivo msgdodia.js
let msgdia = require('./msgdodia');

app.get('/', (req, res) => {
    let dia = data.getDate();
    let msgSelecionada = msgdia.retornarMsgDia(dia);
    res.json({msg: msgSelecionada});
});

app.listen(8080, () => {
    console.log('Servidor iniciado em: '+ data);
});