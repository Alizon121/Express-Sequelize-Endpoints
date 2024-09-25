'use strict';

const {Insect, Tree, InsectTree} = require('../models')
const {Op} = require('sequelize')

const insectTrees = [
  {
    name: "Western Pygmy Blue Butterfly",
    tree: "General Sherman"
  },
  {
    name: "Western Pygmy Blue Butterfly",
    tree: "General Grant"
  },
  {
    name: "Western Pygmy Blue Butterfly",
    tree: "Lincoln"
  },
  {
    name: "Western Pygmy Blue Butterfly",
    tree: "Stagg"
  },
  {
    name: "Patu Digua Spider",
    tree: "Stagg"
  }
]


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   for (let i = 0; i < insectTrees.length; i++) {
    const data = insectTrees[i];
    const insect = await Insect.findOne({where:{ name: data.name}})
    const tree = await Tree.findOne({where: {tree: data.tree}})

    if (insect && tree) {
      await InsectTree.create({insectId: insect.id, treeId: tree.id})
    }
   }
  },

  async down (queryInterface, Sequelize) {
   for (let i = 0; i < insectTrees.length; i++) {
    const data = insectTrees[i];
    const insect = await Insect.findOne({where:{name:data.name}});
    const tree = await Tree.findONe({where:{tree:data.tree}});

    if (insect && tree) {
      await InsectTree.destroy({where: {insectId:insect.id, treeId:tree.id, }})
    }
   }
  }
};
