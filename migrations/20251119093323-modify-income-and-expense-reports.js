'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('IncomeAndExpenseReports', 'data');
    await queryInterface.addColumn('IncomeAndExpenseReports', 'path', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('IncomeAndExpenseReports', 'path');
    await queryInterface.addColumn('IncomeAndExpenseReports', 'data', {
      type: Sequelize.JSON,
      allowNull: true,
    });
  }
};
