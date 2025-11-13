'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('documents', 'createdAt', {
      allowNull: true,
      type: Sequelize.DATE
    });
    await queryInterface.addColumn('documents', 'updatedAt', {
      allowNull: true,
      type: Sequelize.DATE
    });

    await queryInterface.sequelize.query(
      'UPDATE "documents" SET "createdAt" = NOW(), "updatedAt" = NOW() WHERE "createdAt" IS NULL;'
    );

    await queryInterface.changeColumn('documents', 'createdAt', {
      allowNull: false,
      type: Sequelize.DATE
    });
    await queryInterface.changeColumn('documents', 'updatedAt', {
      allowNull: false,
      type: Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('documents', 'createdAt');
    await queryInterface.removeColumn('documents', 'updatedAt');
  }
};
