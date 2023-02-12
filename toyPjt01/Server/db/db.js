const path = require('path');
const mysql = require('mysql2');
const dotenv = require('dotenv').config({ path: path.join(__dirname,".env")});

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    connectionLimit : 30 // 커넥션수 30개로 설정
}

module.exports =  mysql.createPool(config);