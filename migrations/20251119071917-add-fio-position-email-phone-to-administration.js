'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Administrations', 'fio', {
      type: Sequelize.TEXT,
      allowNull: true,
    });
    await queryInterface.addColumn('Administrations', 'position', {
      type: Sequelize.TEXT,
      allowNull: true,
    });
    await queryInterface.addColumn('Administrations', 'email', {
      type: Sequelize.TEXT,
      allowNull: true,
    });
    await queryInterface.addColumn('Administrations', 'phone', {
      type: Sequelize.TEXT,
      allowNull: true,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Administrations', 'fio');
    await queryInterface.removeColumn('Administrations', 'position');
    await queryInterface.removeColumn('Administrations', 'email');
    await queryInterface.removeColumn('Administrations', 'phone');
  }
};
