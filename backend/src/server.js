const express = require('express');
const routes = require('./routes');
const mongoose =  require('mongoose');

// get, put, post delçete

const app = express(); // Cria a aplicação
mongoose.connect('mongodb+srv://GustavoLeao2018:oliveira18@cluster0-alt9r.mongodb.net/banco?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}); // Conecta no banco

// req.query  = acessar mquery params (ex localhost/users?idade=33) para filtros
// req.params = acessarm route params para ediçao e delite 
// req.body  = acessar corpo da requisiçãop para criar e editar registros (geralmente em json)

app.use(express.json()); // usa no formato json
app.use(routes); // Usa as rotas do arquivo routes

app.listen(3333);