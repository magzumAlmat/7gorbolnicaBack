const ReportOnPublicServicesRendered = require('../models/ReportOnPublicServicesRendered');

async function createReport(req, res) {
    try {
        const { reportName, year } = req.body;
        const filePath = req.file ? req.file.path : null; // Get path from uploaded file

        const newReportOnPublicServicesRendered = await ReportOnPublicServicesRendered.create({
            reportName,
            year,
            path: filePath // Use the path from the uploaded file
        });
        return res.status(201).json(newReportOnPublicServicesRendered);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getAllReports(req, res) {
    try {
        const reportsOnPublicServicesRendered = await ReportOnPublicServicesRendered.findAll();
        return res.status(200).json(reportsOnPublicServicesRendered);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getReportById(req, res) {
    try {
        const { id } = req.params;
        const reportOnPublicServicesRendered = await ReportOnPublicServicesRendered.findByPk(id);
        if (!reportOnPublicServicesRendered) {
            return res.status(404).json({ error: 'Report On Public Services Rendered not found' });
        }
        return res.status(200).json(reportOnPublicServicesRendered);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function updateReport(req, res) {
    try {
        const { id } = req.params;
        if (req.file) {
            req.body.path = req.file.path;
        }
        const [updated] = await ReportOnPublicServicesRendered.update(req.body, {
            where: { id }
        });
        if (updated) {
            const updatedReportOnPublicServicesRendered = await ReportOnPublicServicesRendered.findByPk(id);
            return res.status(200).json(updatedReportOnPublicServicesRendered);
        }
        return res.status(404).json({ error: 'Report On Public Services Rendered not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function deleteReport(req, res) {
    try {
        const { id } = req.params;
        const deleted = await ReportOnPublicServicesRendered.destroy({
            where: { id }
        });
        if (deleted) {
            return res.status(204).send();
        }
        return res.status(404).json({ error: 'Report On Public Services Rendered not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    createReport,
    getAllReports,
    getReportById,
    updateReport,
    deleteReport
};