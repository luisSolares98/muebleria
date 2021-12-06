var express = require('express');
var compraController = require('../controllers/compraController');

var compraRouter = express.Router();
compraRouter.post('/compra', compraController.insert);
compraRouter.get('/compra/:compraId', compraController.getID);
compraRouter.get('/compraAllAcabados/:compraId', compraController.getAll_acabados_compraId);
compraRouter.get('/compraAllusuarioId/:usuarioId', compraController.getAll_compras_usuario);

module.exports = compraRouter;