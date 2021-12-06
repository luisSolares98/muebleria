const consultas = require('../mySql/reques');

var acabado = {
    getAll: function(req, res) {
        consultas.ejecutar('select * from tbl_acabado', function(err, datos) {
            if (err) {
                res.status(400).json({
                    status: 400,
                    mensaje: "se realizo con exito la consulta",
                    acabados: null
                });
            } else {
                res.json({
                    status: 200,
                    mensaje: "se realizo con exito la consulta",
                    acabados: datos
                });
            }
        });
    },
    insertCompra_Acabado: function(compraId, acabadoId) {
        consultas.ejecutarParametros('insert into tbl_compra_acabado (compraId, acabadoId) VALUES(?, ?)', [compraId, acabadoId], (err, datos) => {
            if (err) {
                return false;
            } else {
                return true;
            }
        });
    }
};
module.exports = acabado;