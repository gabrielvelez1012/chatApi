const { Sequelize } = require('sequelize');

const db = new Sequelize({
    database: 'chat',
    port: 5433,
    host: 'localhost',
    username: 'postgres',
    password: '230516',
    dialect: 'postgres'
});

module.exports = db;