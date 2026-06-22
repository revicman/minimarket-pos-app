'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const StockIn = sequelize.define('StockIn', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    referenceNumber: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    supplierId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'suppliers',
        key: 'id'
      }
    },
    totalQuantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    totalAmount: {
      type: DataTypes.DECIMAL(15, 2),
      defaultValue: 0
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    createdBy: {
      type: DataTypes.UUID,
      references: {
        model: 'users',
        key: 'id'
      }
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
    tableName: 'stock_in',
    timestamps: true
  });

  return StockIn;
};
