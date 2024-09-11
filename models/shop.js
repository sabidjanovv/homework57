const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const District = require('./district');  // District modelini import qilish

const Shop = sequelize.define('shop', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    owner_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    phone_number: {
        type: DataTypes.STRING(15),
    },
    district_id: {
        type: DataTypes.BIGINT,
        allowNull: false 
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

// Association
District.hasMany(Shop, {
    foreignKey: 'district_id',
    as: 'shops'
});

Shop.belongsTo(District, {
    foreignKey: 'district_id',
    as: 'district'
});

module.exports = Shop;
