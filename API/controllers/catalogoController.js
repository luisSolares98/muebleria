const consultas = require('../mySql/reques');
var objMueble = require('../models/Mueble');

var catalogo = {
    getAll: function(req, res) {
        consultas.ejecutar('select * from tbl_catalogo', function(err, datos) {
            if (err) {
                res.status(400).json({
                    status: 400,
                    mensaje: err,
                    muebles: null
                });
            } else {
                res.json({
                    status: 200,
                    mensaje: "se realizo con exito la consulta",
                    muebles: datos
                });
            }
        });
    },
    getID: function(req, res) {
        var muebleId = req.params.muebleId;
        consultas.ejecutar('select * from tbl_catalogo where  id =  ' + muebleId, function(err, datos) {
            if (err) {
                res.status(400).json({
                    status: 400,
                    mensaje: err,
                    mueble: null
                });
            } else {
                res.json({
                    status: 200,
                    mensaje: "se realizo con exito la consulta",
                    mueble: datos
                });
            }
        });
    },
    insert: function(req, res) {
        var body = req.body;
        var nombre = body.nombre;
        var precio = body.precio;
        consultas.ejecutarParametros('insert into tbl_catalogo (nombre, precio) VALUES(?, ?)', [nombre, precio], (err, datos) => {
            if (err) {
                res.status(400).json({
                    status: 400,
                    mensaje: err,
                    mueble: null
                });
            } else {
                res.json({
                    status: 200,
                    mensaje: "se realizo con exito la consulta",
                    muebleId: datos.insertId
                });
            }
        });
    }
};
module.exports = catalogo;