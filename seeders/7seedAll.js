'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password', salt);
    // Seed Roles
    await queryInterface.bulkInsert('Roles', [
      { name: 'admin', createdAt: new Date(), updatedAt: new Date() },
      { name: 'user', createdAt: new Date(), updatedAt: new Date() },
      { name: 'guest', createdAt: new Date(), updatedAt: new Date() },
    ], {});

    // Seed Users
    await queryInterface.bulkInsert('Users', [
      { email: 'admin@example.com', password: hashedPassword, roleId: 1, createdAt: new Date(), updatedAt: new Date() },
      { email: 'user@example.com', password: hashedPassword, roleId: 2, createdAt: new Date(), updatedAt: new Date() },
      { email: 'guest@example.com', password: hashedPassword, roleId: 3, createdAt: new Date(), updatedAt: new Date() },
    ], {});

    // Seed projects
    await queryInterface.bulkInsert('projects', [
      { project_name: 'Project Alpha', createdAt: new Date(), updatedAt: new Date() },
      { project_name: 'Project Beta', createdAt: new Date(), updatedAt: new Date() },
      { project_name: 'Project Gamma', createdAt: new Date(), updatedAt: new Date() },
    ], {});

    // Seed Documents
    await queryInterface.bulkInsert('Documents', [
      { document_name: 'Document 1', document_content: JSON.stringify({data: 'content 1'}), createdAt: new Date(), updatedAt: new Date() },
      { document_name: 'Document 2', document_content: JSON.stringify({data: 'content 2'}), createdAt: new Date(), updatedAt: new Date() },
      { document_name: 'Document 3', document_content: JSON.stringify({data: 'content 3'}), createdAt: new Date(), updatedAt: new Date() },
    ], {});

    // Seed User_projects
    await queryInterface.bulkInsert('User_projects', [
      { user_id: 1, project_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 1, project_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, project_id: 3, createdAt: new Date(), updatedAt: new Date() },
    ], {});

    // Seed Project_documents
    await queryInterface.bulkInsert('Project_documents', [
      { project_id: 1, document_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { project_id: 2, document_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { project_id: 3, document_id: 3, createdAt: new Date(), updatedAt: new Date() },
    ], {});

    // Seed AuthCodes
    await queryInterface.bulkInsert('AuthCodes', [
        { email: 'admin@example.com', code: '123456', valid_till: new Date(), createdAt: new Date(), updatedAt: new Date() },
        { email: 'user@example.com', code: '654321', valid_till: new Date(), createdAt: new Date(), updatedAt: new Date() },
        { email: 'guest@example.com', code: '987654', valid_till: new Date(), createdAt: new Date(), updatedAt: new Date() },
    ], {});

    // Seed Files
    await queryInterface.bulkInsert('Files', [
        { filename: 'file1.txt', path: '/files/file1.txt', mimetype: 'text/plain', createdAt: new Date(), updatedAt: new Date() },
        { filename: 'file2.jpg', path: '/files/file2.jpg', mimetype: 'image/jpeg', createdAt: new Date(), updatedAt: new Date() },
        { filename: 'file3.pdf', path: '/files/file3.pdf', mimetype: 'application/pdf', createdAt: new Date(), updatedAt: new Date() },
    ], {});

    // Seed Administrations
    await queryInterface.bulkInsert('Administrations', [
        { name: 'Administration 1', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Administration 2', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Administration 3', createdAt: new Date(), updatedAt: new Date() },
    ], {});

    // Seed Vacancies
    await queryInterface.bulkInsert('Vacancies', [
        { title: 'Vacancy 1', description: 'Description 1', createdAt: new Date(), updatedAt: new Date() },
        { title: 'Vacancy 2', description: 'Description 2', createdAt: new Date(), updatedAt: new Date() },
        { title: 'Vacancy 3', description: 'Description 3', createdAt: new Date(), updatedAt: new Date() },
    ], {});

    // Seed IncomeAndExpenseReports
    await queryInterface.bulkInsert('IncomeAndExpenseReports', [
        { reportName: 'Report 1', data: JSON.stringify({income: 1000, expense: 500}), createdAt: new Date(), updatedAt: new Date() },
        { reportName: 'Report 2', data: JSON.stringify({income: 2000, expense: 1000}), createdAt: new Date(), updatedAt: new Date() },
        { reportName: 'Report 3', data: JSON.stringify({income: 3000, expense: 1500}), createdAt: new Date(), updatedAt: new Date() },
    ], {});

    // Seed FinanceReports
    await queryInterface.bulkInsert('FinanceReports', [
        { reportName: 'Finance Report 1', year: '2023', createdAt: new Date(), updatedAt: new Date() },
        { reportName: 'Finance Report 2', year: '2024', createdAt: new Date(), updatedAt: new Date() },
        { reportName: 'Finance Report 3', year: '2025', createdAt: new Date(), updatedAt: new Date() },
    ], {});

    // Seed Licenses
    await queryInterface.bulkInsert('Licenses', [
        { licenseName: 'License 1', expiryDate: new Date(), createdAt: new Date(), updatedAt: new Date() },
        { licenseName: 'License 2', expiryDate: new Date(), createdAt: new Date(), updatedAt: new Date() },
        { licenseName: 'License 3', expiryDate: new Date(), createdAt: new Date(), updatedAt: new Date() },
    ], {});

    // Seed AntiCorruptions
    await queryInterface.bulkInsert('AntiCorruptions', [
        { title: 'Anti-corruption 1', documentPath: '/docs/ac1.pdf', createdAt: new Date(), updatedAt: new Date() },
        { title: 'Anti-corruption 2', documentPath: '/docs/ac2.pdf', createdAt: new Date(), updatedAt: new Date() },
        { title: 'Anti-corruption 3', documentPath: '/docs/ac3.pdf', createdAt: new Date(), updatedAt: new Date() },
    ], {});

    // Seed CertificateOfAccreditations
    await queryInterface.bulkInsert('CertificateOfAccreditations', [
        { name: 'Cert 1', issueDate: new Date(), createdAt: new Date(), updatedAt: new Date() },
        { name: 'Cert 2', issueDate: new Date(), createdAt: new Date(), updatedAt: new Date() },
        { name: 'Cert 3', issueDate: new Date(), createdAt: new Date(), updatedAt: new Date() },
    ], {});

    // Seed Prices
    await queryInterface.bulkInsert('Prices', [
        { item: 'Item 1', price: 10.00, currency: 'USD', createdAt: new Date(), updatedAt: new Date() },
        { item: 'Item 2', price: 20.50, currency: 'USD', createdAt: new Date(), updatedAt: new Date() },
        { item: 'Item 3', price: 15.75, currency: 'USD', createdAt: new Date(), updatedAt: new Date() },
    ], {});

    // Seed InformationMaterials
    await queryInterface.bulkInsert('InformationMaterials', [
        { title: 'Info Mat 1', filePath: '/info/mat1.pdf', createdAt: new Date(), updatedAt: new Date() },
        { title: 'Info Mat 2', filePath: '/info/mat2.pdf', createdAt: new Date(), updatedAt: new Date() },
        { title: 'Info Mat 3', filePath: '/info/mat3.pdf', createdAt: new Date(), updatedAt: new Date() },
    ], {});

    // Seed ReportOnPublicServicesRendered
    await queryInterface.bulkInsert('report_on_public_services_rendered', [
        { reportName: 'Public Service Report 1', year: '2023', path: '/reports/psr1.pdf', createdAt: new Date(), updatedAt: new Date() },
        { reportName: 'Public Service Report 2', year: '2024', path: '/reports/psr2.pdf', createdAt: new Date(), updatedAt: new Date() },
        { reportName: 'Public Service Report 3', year: '2025', path: '/reports/psr3.pdf', createdAt: new Date(), updatedAt: new Date() },
    ], {});

    // Seed corporate_documents
    await queryInterface.bulkInsert('corporate_documents', [
        { Name: 'Corporate Doc 1', path: '/docs/cd1.pdf', createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Corporate Doc 2', path: '/docs/cd2.pdf', createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Corporate Doc 3', path: '/docs/cd3.pdf', createdAt: new Date(), updatedAt: new Date() },
    ], {});

    // Seed public_procurement_plans
    await queryInterface.bulkInsert('public_procurement_plans', [
        { Name: 'Procurement Plan 1', path: '/plans/pp1.pdf', createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Procurement Plan 2', path: '/plans/pp2.pdf', createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Procurement Plan 3', path: '/plans/pp3.pdf', createdAt: new Date(), updatedAt: new Date() },
    ], {});

    // Seed public_procurement_announcements
    await queryInterface.bulkInsert('public_procurement_announcements', [
        { Name: 'Announcement 1', year: '2023', path: '/announcements/pa1.pdf', createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Announcement 2', year: '2024', path: '/announcements/pa2.pdf', createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Announcement 3', year: '2025', path: '/announcements/pa3.pdf', createdAt: new Date(), updatedAt: new Date() },
    ], {});

    // Seed public_procurement_protocols
    await queryInterface.bulkInsert('public_procurement_protocols', [
        { Name: 'Protocol 1', year: '2023', path: '/protocols/pp1.pdf', createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Protocol 2', year: '2024', path: '/protocols/pp2.pdf', createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Protocol 3', year: '2025', path: '/protocols/pp3.pdf', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('TRUNCATE "public_procurement_protocols" RESTART IDENTITY CASCADE');
    await queryInterface.sequelize.query('TRUNCATE "public_procurement_announcements" RESTART IDENTITY CASCADE');
    await queryInterface.sequelize.query('TRUNCATE "public_procurement_plans" RESTART IDENTITY CASCADE');
    await queryInterface.sequelize.query('TRUNCATE "corporate_documents" RESTART IDENTITY CASCADE');
    await queryInterface.sequelize.query('TRUNCATE "report_on_public_services_rendered" RESTART IDENTITY CASCADE');
    await queryInterface.sequelize.query('TRUNCATE "InformationMaterials" RESTART IDENTITY CASCADE');
    await queryInterface.sequelize.query('TRUNCATE "Prices" RESTART IDENTITY CASCADE');
    await queryInterface.sequelize.query('TRUNCATE "CertificateOfAccreditations" RESTART IDENTITY CASCADE');
    await queryInterface.sequelize.query('TRUNCATE "AntiCorruptions" RESTART IDENTITY CASCADE');
    await queryInterface.sequelize.query('TRUNCATE "Licenses" RESTART IDENTITY CASCADE');
    await queryInterface.sequelize.query('TRUNCATE "FinanceReports" RESTART IDENTITY CASCADE');
    await queryInterface.sequelize.query('TRUNCATE "IncomeAndExpenseReports" RESTART IDENTITY CASCADE');
    await queryInterface.sequelize.query('TRUNCATE "Vacancies" RESTART IDENTITY CASCADE');
    await queryInterface.sequelize.query('TRUNCATE "Administrations" RESTART IDENTITY CASCADE');
    await queryInterface.sequelize.query('TRUNCATE "Files" RESTART IDENTITY CASCADE');
    await queryInterface.sequelize.query('TRUNCATE "AuthCodes" RESTART IDENTITY CASCADE');
    await queryInterface.sequelize.query('TRUNCATE "Project_documents" RESTART IDENTITY CASCADE');
    await queryInterface.sequelize.query('TRUNCATE "User_projects" RESTART IDENTITY CASCADE');
    await queryInterface.sequelize.query('TRUNCATE "Documents" RESTART IDENTITY CASCADE');
    await queryInterface.sequelize.query('TRUNCATE "projects" RESTART IDENTITY CASCADE');
    await queryInterface.sequelize.query('TRUNCATE "Users" RESTART IDENTITY CASCADE');
    await queryInterface.sequelize.query('TRUNCATE "Roles" RESTART IDENTITY CASCADE');
  }
};
