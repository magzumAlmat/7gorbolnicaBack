const express=require('express');


const router = express.Router();

const { getAllUserProjects, createProject, updateProject, deleteProject, getProjectById } = require('../controllers/projectController');
const { getAllProjectDocuments, createDocument, getDocumentById, updateDocument, deleteDocument, createDocumentByTemplate, getAllAdminDocuments } = require('../controllers/documentController');
const { getAllUsers, getAuthenticatedUserInfo, updateUserInfo, deleteUser } = require('../controllers/userController');
const { uploadFile, listFiles, getFileById, updateFile, deleteFile } = require('../controllers/fileController');
const { getAllAdministration, createAdministration, getAdministrationById, updateAdministration, deleteAdministration } = require('../controllers/administrationController');
const { getAllVacancies, createVacancy, getVacancyById, updateVacancy, deleteVacancy } = require('../controllers/vacancyController');
const { getAllIncomeAndExpenseReports, createIncomeAndExpenseReport, getIncomeAndExpenseReportById, updateIncomeAndExpenseReport, deleteIncomeAndExpenseReport } = require('../controllers/incomeAndExpenseReportController');
const { getAllFinanceReports, createFinanceReport, getFinanceReportById, updateFinanceReport, deleteFinanceReport } = require('../controllers/financeReportController');
const { getAllLicenses, createLicense, getLicenseById, updateLicense, deleteLicense } = require('../controllers/licenseController');
const { getAllAntiCorruption, createAntiCorruption, getAntiCorruptionById, updateAntiCorruption, deleteAntiCorruption } = require('../controllers/antiCorruptionController');
const { getAllCertificateOfAccreditations, createCertificateOfAccreditation, getCertificateOfAccreditationById, updateCertificateOfAccreditation, deleteCertificateOfAccreditation } = require('../controllers/certificateOfAccreditationController');
const {
  getAll,
  getById,
  create,
  update,
  remove
} = require('../controllers/informationMaterialController');
const {
    getAllReports,
    createReport,
    getReportById,
    updateReport,
    deleteReport,
} = require('../controllers/reportOnPublicServicesRenderedController');

const {
    createCorporateDocument,
    getAllCorporateDocuments,
    getCorporateDocumentById,
    updateCorporateDocument,
    deleteCorporateDocument
} = require('../controllers/corporateDocumentController');

const {
    createPublicProcurementPlan,
    getAllPublicProcurementPlans,
    getPublicProcurementPlanById,
    updatePublicProcurementPlan,
    deletePublicProcurementPlan
} = require('../controllers/publicProcurementPlanController');

const {
    createPublicProcurementAnnouncement,
    getAllPublicProcurementAnnouncements,
    getPublicProcurementAnnouncementById,
    updatePublicProcurementAnnouncement,
    deletePublicProcurementAnnouncement
} = require('../controllers/publicProcurementAnnouncementController');

const {
    createPublicProcurementProtocol,
    getAllPublicProcurementProtocols,
    getPublicProcurementProtocolById,
    updatePublicProcurementProtocol,
    deletePublicProcurementProtocol
} = require('../controllers/publicProcurementProtocolController');

const upload = require('../../../config/multer');
const passport = require('passport');



//USER
router.get('/api/user/allusers', passport.authenticate('jwt', {session: false}), getAllUsers);
router.get('/api/user', passport.authenticate('jwt', {session: false}), getAuthenticatedUserInfo);
router.patch('/api/user', passport.authenticate('jwt', {session: false}), updateUserInfo);
router.delete('/api/user', passport.authenticate('jwt', {session: false}), deleteUser);

//PROJECT 
router.get('/api/user/project/allprojects', passport.authenticate('jwt', {session: false}), getAllUserProjects);
router.get('/api/user/project/:id', passport.authenticate('jwt', {session: false}), getProjectById);
router.post('/api/user/project', passport.authenticate('jwt', {session: false}), createProject);
router.patch('/api/user/project/:id', passport.authenticate('jwt', {session: false}), updateProject);
router.delete('/api/user/project/:id', passport.authenticate('jwt', {session: false}), deleteProject);


//DOCUMENT
router.get('/api/user/project/:id/alldocuments', passport.authenticate('jwt', {session: false}), getAllProjectDocuments);
router.get('/api/user/project/document/:id', getDocumentById);
// router.get('/api/user/project/document/:id', passport.authenticate('jwt', {session: false}), getDocumentById);
router.get('/api/alltemplates', passport.authenticate('jwt', {session: false}), getAllAdminDocuments);
router.post('/api/user/project/:id/createdocument', passport.authenticate('jwt', {session: false}), createDocument);
router.post('/api/user/project/:id/createdocument/:doctype', passport.authenticate('jwt', {session: false}), createDocumentByTemplate);
router.patch('/api/user/project/document/:id', passport.authenticate('jwt', {session: false}), updateDocument);
router.delete('/api/user/project/document/:id', passport.authenticate('jwt', {session: false}), deleteDocument);

router.get(`/api/documents/public/:id`,getDocumentById)
router.get(`/api/documents/public`,getAllAdminDocuments)

//FILE
router.post('/api/upload', passport.authenticate('jwt', {session: false}), upload.single("file"), uploadFile);
router.get('/api/files', passport.authenticate('jwt', {session: false}), listFiles);
router.get('/api/files/:id', passport.authenticate('jwt', {session: false}), getFileById);
router.put('/api/files/:id', passport.authenticate('jwt', {session: false}), upload.single("file"), updateFile);
router.delete('/api/files/:id', passport.authenticate('jwt', {session: false}), deleteFile);

//ADMINISTRATION
router.get('/api/administration', passport.authenticate('jwt', {session: false}), getAllAdministration);
router.post('/api/administration', passport.authenticate('jwt', {session: false}), createAdministration);
router.get('/api/administration/:id', passport.authenticate('jwt', {session: false}), getAdministrationById);
router.put('/api/administration/:id', passport.authenticate('jwt', {session: false}), updateAdministration);
router.delete('/api/administration/:id', passport.authenticate('jwt', {session: false}), deleteAdministration);

//VACANCY
router.get('/api/vacancies', passport.authenticate('jwt', {session: false}), getAllVacancies);
router.post('/api/vacancies', passport.authenticate('jwt', {session: false}), createVacancy);
router.get('/api/vacancies/:id', passport.authenticate('jwt', {session: false}), getVacancyById);
router.put('/api/vacancies/:id', passport.authenticate('jwt', {session: false}), updateVacancy);
router.delete('/api/vacancies/:id', passport.authenticate('jwt', {session: false}), deleteVacancy);

router.get('/api/vacancies/public', getAllVacancies);
router.get('/api/vacancies/public/:id', getVacancyById);

//INCOME AND EXPENSE REPORT
router.get('/api/income-and-expense-reports', passport.authenticate('jwt', {session: false}), getAllIncomeAndExpenseReports);
router.post('/api/income-and-expense-reports', passport.authenticate('jwt', {session: false}), createIncomeAndExpenseReport);
router.get('/api/income-and-expense-reports/:id', passport.authenticate('jwt', {session: false}), getIncomeAndExpenseReportById);
router.put('/api/income-and-expense-reports/:id', passport.authenticate('jwt', {session: false}), updateIncomeAndExpenseReport);
router.delete('/api/income-and-expense-reports/:id', passport.authenticate('jwt', {session: false}), deleteIncomeAndExpenseReport);

router.get('/api/income-and-expense-reports/public', getAllIncomeAndExpenseReports);
router.get('/api/income-and-expense-reports/public/:id', getIncomeAndExpenseReportById);

//FINANCE REPORT
router.get('/api/finance-reports', passport.authenticate('jwt', {session: false}), getAllFinanceReports);
router.post('/api/finance-reports', passport.authenticate('jwt', {session: false}), createFinanceReport);
router.get('/api/finance-reports/:id', passport.authenticate('jwt', {session: false}), getFinanceReportById);
router.put('/api/finance-reports/:id', passport.authenticate('jwt', {session: false}), updateFinanceReport);
router.delete('/api/finance-reports/:id', passport.authenticate('jwt', {session: false}), deleteFinanceReport);

router.get('/api/finance-reports/public', getAllFinanceReports);
router.get('/api/finance-reports/public/:id', getFinanceReportById);

//LICENSE
router.get('/api/licenses', passport.authenticate('jwt', {session: false}), getAllLicenses);
router.post('/api/licenses', passport.authenticate('jwt', {session: false}), createLicense);
router.get('/api/licenses/:id', passport.authenticate('jwt', {session: false}), getLicenseById);
router.put('/api/licenses/:id', passport.authenticate('jwt', {session: false}), updateLicense);
router.delete('/api/licenses/:id', passport.authenticate('jwt', {session: false}), deleteLicense);

router.get('/api/licenses/public', getAllLicenses);
router.get('/api/licenses/public/:id', getLicenseById);

//ANTI-CORRUPTION
router.get('/api/anti-corruption', passport.authenticate('jwt', {session: false}), getAllAntiCorruption);
router.post('/api/anti-corruption', passport.authenticate('jwt', {session: false}), createAntiCorruption);
router.get('/api/anti-corruption/:id', passport.authenticate('jwt', {session: false}), getAntiCorruptionById);
router.put('/api/anti-corruption/:id', passport.authenticate('jwt', {session: false}), updateAntiCorruption);
router.delete('/api/anti-corruption/:id', passport.authenticate('jwt', {session: false}), deleteAntiCorruption);

router.get('/api/anti-corruption/public', getAllAntiCorruption);
router.get('/api/anti-corruption/public/:id', getAntiCorruptionById);

//CERTIFICATE OF ACCREDITATION
router.get('/api/certificate-of-accreditation', passport.authenticate('jwt', {session: false}), getAllCertificateOfAccreditations);
router.post('/api/certificate-of-accreditation', passport.authenticate('jwt', {session: false}), createCertificateOfAccreditation);
router.get('/api/certificate-of-accreditation/:id', passport.authenticate('jwt', {session: false}), getCertificateOfAccreditationById);
router.put('/api/certificate-of-accreditation/:id', passport.authenticate('jwt', {session: false}), updateCertificateOfAccreditation);
router.delete('/api/certificate-of-accreditation/:id', passport.authenticate('jwt', {session: false}), deleteCertificateOfAccreditation);

router.get('/api/certificate-of-accreditation/public', getAllCertificateOfAccreditations);
router.get('/api/certificate-of-accreditation/public/:id', getCertificateOfAccreditationById);

//REPORT ON PUBLIC SERVICES RENDERED
router.get('/api/report-on-public-services-rendered', passport.authenticate('jwt', {session: false}), getAllReports);
router.post('/api/report-on-public-services-rendered', passport.authenticate('jwt', {session: false}), upload.single("file"), createReport);
router.get('/api/report-on-public-services-rendered/:id', passport.authenticate('jwt', {session: false}), getReportById);
router.put('/api/report-on-public-services-rendered/:id', passport.authenticate('jwt', {session: false}), updateReport);
router.delete('/api/report-on-public-services-rendered/:id', passport.authenticate('jwt', {session: false}), deleteReport);

router.get('/api/report-on-public-services-rendered/public', getAllReports);
router.get('/api/report-on-public-services-rendered/public/:id', getReportById);

//CORPORATE DOCUMENTS
router.post('/api/corporate-documents', passport.authenticate('jwt', {session: false}), createCorporateDocument);
router.get('/api/corporate-documents', passport.authenticate('jwt', {session: false}), getAllCorporateDocuments);
router.get('/api/corporate-documents/:id', passport.authenticate('jwt', {session: false}), getCorporateDocumentById);
router.put('/api/corporate-documents/:id', passport.authenticate('jwt', {session: false}), updateCorporateDocument);
router.delete('/api/corporate-documents/:id', passport.authenticate('jwt', {session: false}), deleteCorporateDocument);

router.get('/api/corporate-documents/public', getAllCorporateDocuments);
router.get('/api/corporate-documents/public/:id', getCorporateDocumentById);

//PUBLIC PROCUREMENT PLAN
router.post('/api/public-procurement-plans', passport.authenticate('jwt', {session: false}), createPublicProcurementPlan);
router.get('/api/public-procurement-plans', passport.authenticate('jwt', {session: false}), getAllPublicProcurementPlans);
router.get('/api/public-procurement-plans/:id', passport.authenticate('jwt', {session: false}), getPublicProcurementPlanById);
router.put('/api/public-procurement-plans/:id', passport.authenticate('jwt', {session: false}), updatePublicProcurementPlan);
router.delete('/api/public-procurement-plans/:id', passport.authenticate('jwt', {session: false}), deletePublicProcurementPlan);

router.get('/api/public-procurement-plans/public', getAllPublicProcurementPlans);
router.get('/api/public-procurement-plans/public/:id', getPublicProcurementPlanById);

//PUBLIC PROCUREMENT ANNOUNCEMENTS
router.post('/api/public-procurement-announcements', passport.authenticate('jwt', {session: false}), createPublicProcurementAnnouncement);
router.get('/api/public-procurement-announcements', passport.authenticate('jwt', {session: false}), getAllPublicProcurementAnnouncements);
router.get('/api/public-procurement-announcements/:id', passport.authenticate('jwt', {session: false}), getPublicProcurementAnnouncementById);
router.put('/api/public-procurement-announcements/:id', passport.authenticate('jwt', {session: false}), updatePublicProcurementAnnouncement);
router.delete('/api/public-procurement-announcements/:id', passport.authenticate('jwt', {session: false}), deletePublicProcurementAnnouncement);

router.get('/api/public-procurement-announcements/public', getAllPublicProcurementAnnouncements);
router.get('/api/public-procurement-announcements/public/:id', getPublicProcurementAnnouncementById);

//PUBLIC PROCUREMENT PROTOCOLS
router.post('/api/public-procurement-protocols', passport.authenticate('jwt', {session: false}), createPublicProcurementProtocol);
router.get('/api/public-procurement-protocols', passport.authenticate('jwt', {session: false}), getAllPublicProcurementProtocols);
router.get('/api/public-procurement-protocols/:id', passport.authenticate('jwt', {session: false}), getPublicProcurementProtocolById);
router.put('/api/public-procurement-protocols/:id', passport.authenticate('jwt', {session: false}), updatePublicProcurementProtocol);
router.delete('/api/public-procurement-protocols/:id', passport.authenticate('jwt', {session: false}), deletePublicProcurementProtocol);

router.get('/api/public-procurement-protocols/public', getAllPublicProcurementProtocols);
router.get('/api/public-procurement-protocols/public/:id', getPublicProcurementProtocolById);


// CRUD маршруты
router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;