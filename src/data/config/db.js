const mysql = require('mysql2');

const db = mysql.createPool({
    host : '127.0.0.1',
    user : 'mktseller',
    password : 'testtest^%$3211',
    database : 'mktseller',
    port : 3306,
});

db.connect();

db.query('SELECT * FROM g5_member', function (error, results, fields) { //sql이 1번째 인자, 2번째가 callback
    if (error) {
        console.log(error);
    }
    console.log(results);
});

db.end();

export default db;