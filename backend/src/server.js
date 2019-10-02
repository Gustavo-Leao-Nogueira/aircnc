const express = require('express');
const routes = require('./routes');

const app = express();

// req.query  = acessar mquery params (ex localhost/users?idade=33) para filtros
// req.params = acessarm route params para ediçao e delite 
// req.body  = acessar corpo da requisiçãop para criar e editar registros (geralmente em json)

app.use(express.json()); // usa no formato json
app.use(routes); // Usa as rotas do arquivo routes

app.listen(3333);