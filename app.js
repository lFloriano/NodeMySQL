var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'comerciante@localhost',
    password: 'comerciante',
    database: 'comercio'
});

connection.connect();

let sql = "select Nome, CPF from cliente ";
connection.query(sql, function(erro, results, fields){
    results.forEach( function(element){
        console.log('Name: %s - CPF: %s', element.Nome, element.CPF);
    });
});

connection.end();
console.log("End of program");