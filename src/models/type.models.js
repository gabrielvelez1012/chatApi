const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Type = db.define('types', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
}, {
    timestamps: false
});

module.exports = Type;