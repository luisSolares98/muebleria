const consultas = require('../mySql/reques');
const acabado = require('./acabadoController');

var compra = {
    getAll_acabados_compraId: function(req, res) {
        var compraId = req.params.compraId;
        consultas.ejecutar('select ta.id, ta.nombre, ta.precio from tbl_compra_acabado tca join tbl_acabado ta on tca.acabadoId = ta.id where tca.compraId = ' + compraId, function(err, datos) {
            if (err) {
                res.status(400).json({
                    status: 400,
                    mensaje: "se realizo con exito la consulta",
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
    getAll_compras_usuario: function(req, res) {
        var usuarioId = req.params.usuarioId;
        consultas.ejecutar('select tc.id, tc.fecha, tc.precioTotal, cat.nombre, cat.precio from tbl_compra tc join tbl_catalogo cat on cat.id = tc.catalogoId where usuarioId = ' + usuarioId, function(err, datos) {
            if (err) {
                res.status(400).json({
                    status: 400,
                    mensaje: "se realizo con exito la consulta",
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
        var compraId = req.params.compraId;
        consultas.ejecutar('select * from tbl_compra where  id = ' + compraId, function(err, datos) {
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
        var precioTotal = body.precioTotal;
        var catalogoId = body.id;
        var usuarioId = body.usuarioId;
        var listAcabados = body.acabado;
        consultas.ejecutarParametros('insert into tbl_compra (precioTotal, fecha, catalogoId, usuarioId) VALUES(?, now(), ?, ?)', [precioTotal, catalogoId, usuarioId], (err, datos) => {
            if (err) {
                res.status(400).json({
                    status: 400,
                    mensaje: err,
                    mueble: null
                });
            } else {
                listAcabados.forEach(item => {
                    const bandera = acabado.insertCompra_Acabado(datos.insertId, item.id);
                    if (bandera) {
                        console.log(bandera);
                    }
                });
                res.json({
                    status: 200,
                    mensaje: "se realizo con exito la consulta",
                    muebleId: datos.insertId
                });
            }
        });
    }

};
module.exports = compra;