const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Shop = require('./shop');

const Owner = sequelize.define('Owner', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone_number: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    otp_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
});

// Owner has many Shops
Owner.hasMany(Shop, {
    foreignKey: 'owner_id',  // Shop jadvalida 'owner_id' bo'ladi
    as: 'shops'
});

// Shop belongs to Owner
Shop.belongsTo(Owner, {
    foreignKey: 'owner_id',
    as: 'owner'
});

module.exports = Owner;
