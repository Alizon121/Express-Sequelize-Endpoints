'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Insect extends Model {
    static associate(models) {
      // define association here
      Insect.belongsToMany(
        models.Tree,
        { through: models.InsectTree,
        foreignKey: 'insectId',
        other: 'treeId'
      }
      )
    }
  };
  Insect.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    fact: DataTypes.STRING,
    territory: DataTypes.STRING,
    millimeters: {
      type: DataTypes.FLOAT,
      validate: {
        min: 0,
      },
    }
  }, {
    sequelize,
    modelName: 'Insect',
  });
  return Insect;
};
