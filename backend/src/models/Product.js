'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    sku: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    barcode: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    categoryId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id'
      }
    },
    costPrice: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
      comment: 'Harga Pokok Pembelian'
    },
    sellingPrice: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    minimumStock: {
      type: DataTypes.INTEGER,
      defaultValue: 5
    },
    unit: {
      type: DataTypes.STRING(20),
      defaultValue: 'pcs'
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'products',
    timestamps: true
  });

  return Product;
};
