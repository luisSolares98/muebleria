var express = require('express');
var usuarioController = require('../controllers/UsuarioController');

var usuarioRouter = express.Router();
usuarioRouter.post('/usuario', usuarioController.insert);
usuarioRouter.post('/Login', usuarioController.getLogin);
usuarioRouter.get('/usuario', usuarioController.getAll);
module.exports = usuarioRouter;