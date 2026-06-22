'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const StockInDetail = sequelize.define('StockInDetail', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    stockInId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'stock_in',
        key: 'id'
      }
    },
    productId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    unitPrice: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false
    },
    totalPrice: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false
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
    tableName: 'stock_in_details',
    timestamps: true
  });

  return StockInDetail;
};
