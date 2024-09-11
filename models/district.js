const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const District = sequelize.define('district', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
});

module.exports = District;
