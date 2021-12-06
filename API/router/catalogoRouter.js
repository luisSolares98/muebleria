var express = require('express');
var catalogoController = require('../controllers/catalogoController');
var acabadoController = require('../controllers/acabadoController');

var catalogoRouter = express.Router();
catalogoRouter.get('/catalogo', catalogoController.getAll);
catalogoRouter.get('/acabados', acabadoController.getAll);

module.exports = catalogoRouter;