const mysql = require('mysql2/promise');
const {logger} = require('./winston');

// TODO: 본인의 DB 계정 입력
const pool = mysql.createPool({
    host: 'database-1.chvkhq0wgmem.us-east-1.rds.amazonaws.com',
    user: 'admin',
    port: '3306',
    password: 'psy07171441',
    database: 'testdb'
});

module.exports = {
    pool: pool
};