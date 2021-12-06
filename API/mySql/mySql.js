var mysql = require('mysql');

var SQL = (function() {
    var instancia;

    function createInstance() {
        instancia = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'muebleria'
        });
        return instancia;
    }
    return {
        getInstancia: function() {
            if (!instancia) {
                instancia = createInstance();
            }
            return instancia;
        }
    };
});

module.exports = SQL;