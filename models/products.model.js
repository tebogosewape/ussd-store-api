const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const products = sequelize.define('products', {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    desc: {
      type: DataTypes.STRING
    },
    price: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});

module.exports = products;