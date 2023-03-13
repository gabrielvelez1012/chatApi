const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Messages = db.define('messages', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
    },
    typeId: {
    type: DataTypes.INTEGER,
    field: 'type_id',
    }
}, {
    timestamps: true,
    updatedAt: false,
});

module.exports = Messages;