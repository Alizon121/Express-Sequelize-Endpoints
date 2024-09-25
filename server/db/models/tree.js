'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tree extends Model {
    static associate(models) {
      // define association here
      Tree.belongsToMany(
        models.Insect,
        { through: models.InsectTree,
        foreignKey: 'treeId',
        other: 'insectId'
      }
      )
    }
  };
  Tree.init({
    tree: DataTypes.STRING,
    location: DataTypes.STRING,
    heightFt: {
      type: DataTypes.FLOAT,
      validate: {
        min: 0,
      }
    },
    groundCircumferenceFt: {
      type: DataTypes.FLOAT,
      validate: {
        min: 0,
      }
    }
  }, {
    sequelize,
    modelName: 'Tree',
  });
  return Tree;
};
