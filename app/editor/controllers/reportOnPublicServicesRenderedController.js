const ReportOnPublicServicesRendered = require('../models/ReportOnPublicServicesRendered');

async function createReportOnPublicServicesRendered(req, res) {
    try {
        const newReportOnPublicServicesRendered = await ReportOnPublicServicesRendered.create(req.body);
        return res.status(201).json(newReportOnPublicServicesRendered);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getAllReportsOnPublicServicesRendered(req, res) {
    try {
        const reportsOnPublicServicesRendered = await ReportOnPublicServicesRendered.findAll();
        return res.status(200).json(reportsOnPublicServicesRendered);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getReportOnPublicServicesRenderedById(req, res) {
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

async function updateReportOnPublicServicesRendered(req, res) {
    try {
        const { id } = req.params;
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

async function deleteReportOnPublicServicesRendered(req, res) {
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
    createReportOnPublicServicesRendered,
    getAllReportsOnPublicServicesRendered,
    getReportOnPublicServicesRenderedById,
    updateReportOnPublicServicesRendered,
    deleteReportOnPublicServicesRendered
};
