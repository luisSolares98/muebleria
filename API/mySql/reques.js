var SQL = require('./mySql');

var consultas = {
    ejecutar: function(query, callback) {
        let connect = SQL().getInstancia();
        connect.query(query, function(err, result) {
            if (err) {
                console.log(err);
                callback(err);
                return;
            }
            callback(null, result);
        });
    },
    ejecutarParametros: function(query, areglo, callback) {
        let connect = SQL().getInstancia();
        connect.query(query, areglo, function(err, result) {
            if (err) {
                callback(err);
                return;
            }
            callback(null, result);
        });
    }
};
module.exports = consultas;