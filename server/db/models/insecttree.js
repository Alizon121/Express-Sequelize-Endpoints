'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InsectTree extends Model {
    static associate(models) {
      // define association here
    }
  }
  InsectTree.init({
    treeId: DataTypes.INTEGER,
    insectId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'InsectTree',
  });
  return InsectTree;
};