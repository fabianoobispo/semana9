const express = require('express');
const mongoose  = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:88281783f@cluster0-kksmh.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// GET-enviar  POST-receber  PUT-alterar DELETE-deletar....
 

//req.query = acessar query params (para filtros)
//reqparams = acessar route params ( para edicao e delete)
//req.body = acessar corpo da rqueisicao (para criacao e edicao)

app.use(express.json());
app.use(routes);

app.listen(3333);
