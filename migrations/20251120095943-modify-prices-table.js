'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Prices', 'item');
    await queryInterface.removeColumn('Prices', 'price');
    await queryInterface.removeColumn('Prices', 'currency');
    await queryInterface.addColumn('Prices', 'name', {
      type: Sequelize.TEXT,
      allowNull: true,
    });
    await queryInterface.addColumn('Prices', 'year', {
      type: Sequelize.TEXT,
      allowNull: true,
    });
    await queryInterface.addColumn('Prices', 'path', {
      type: Sequelize.TEXT,
      allowNull: true,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('Prices', 'item', {
      type: Sequelize.STRING(255),
      allowNull: false
    });
    await queryInterface.addColumn('Prices', 'price', {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    });
    await queryInterface.addColumn('Prices', 'currency', {
      type: Sequelize.STRING(10),
      allowNull: false
    });
    await queryInterface.removeColumn('Prices', 'name');
    await queryInterface.removeColumn('Prices', 'year');
    await queryInterface.removeColumn('Prices', 'path');
  }
};
