const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Conversation = db.define('conversations', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
    },
    typeId: {
        type: DataTypes.INTEGER,
        field: 'type_id',
    },
}, {
    timestamps: true,
    updatedAt: false,
});

module.exports = Conversation;