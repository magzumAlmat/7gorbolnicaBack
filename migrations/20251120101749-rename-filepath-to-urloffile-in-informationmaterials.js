'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('InformationMaterials', 'filePath', 'urlOfFile');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('InformationMaterials', 'urlOfFile', 'filePath');
  }
};
