const consultas = require('../mySql/reques');

var usuario = {
    getAll: function(req, res) {
        consultas.ejecutar('select * from tbl_usuario', function(err, datos) {
            if (err) {
                res.status(400).json({
                    status: 400,
                    mensaje: "se realizo con exito la consulta",
                    usuario: null
                });
            } else {
                res.json({
                    status: 200,
                    mensaje: "se realizo con exito la consulta",
                    usuario: datos
                });
            }
        });
    },
    getLogin: function(req, res) {
        var body = req.body;
        var correo = body.email;
        var password = body.password;
        consultas.ejecutarParametros('select id, nombreCompleto, correo as email, tipo from  tbl_usuario where correo = ? and password = sha1(?)', [correo, password], (err, datos) => {
            if (err) {
                res.status(400).json({
                    status: 400,
                    mensaje: err,
                    usuario: null
                });
            } else {

                res.json({
                    status: 200,
                    mensaje: "se realizo con exito la consulta",
                    usuario: datos[0]
                });
            }
        });
    },
    insert: function(req, res) {
        var body = req.body;
        var nombreCompleto = body.nombreCompleto;
        var correo = body.email;
        var password = body.password;
        var tipo = 'user';
        consultas.ejecutarParametros('insert into tbl_usuario (nombreCompleto, correo, password, tipo ) VALUES(?, ?, sha1(?), ?)', [nombreCompleto, correo, password, tipo], (err, datos) => {
            if (err) {
                res.status(400).json({
                    status: 400,
                    mensaje: err,
                    usuario: null
                });
            } else {
                res.json({
                    status: 200,
                    mensaje: "se realizo con exito la consulta",
                    usuarioId: datos.insertId
                });
            }
        });
    }
};
module.exports = usuario;