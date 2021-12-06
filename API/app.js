var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar archivosRutas
var usuarioRouter = require('./router/UsuarioRouter');
var compraRouter = require('./router/CompraRouter');
var catalogoRouter = require('./router/catalogoRouter');

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// cors
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// rutas
app.use('/api', usuarioRouter, compraRouter, catalogoRouter);


// exportar
module.exports = app;