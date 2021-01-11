const mysql = require('mysql');

var pool      =    mysql.createPool({
    connectionLimit : 20, 
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'personal_notes_database',
    debug    :  false
});

module.exports = pool;
