const FinanceReport = require('../models/FinanceReport');

async function createFinanceReport(req, res) {
    try {
        const newFinanceReport = await FinanceReport.create(req.body);
        return res.status(201).json(newFinanceReport);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getAllFinanceReports(req, res) {
    try {
        const financeReports = await FinanceReport.findAll();
        return res.status(200).json(financeReports);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getFinanceReportById(req, res) {
    try {
        const { id } = req.params;
        const financeReport = await FinanceReport.findByPk(id);
        if (!financeReport) {
            return res.status(404).json({ error: 'Finance Report not found' });
        }
        return res.status(200).json(financeReport);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function updateFinanceReport(req, res) {
    try {
        const { id } = req.params;
        const [updated] = await FinanceReport.update(req.body, {
            where: { id }
        });
        if (updated) {
            const updatedFinanceReport = await FinanceReport.findByPk(id);
            return res.status(200).json(updatedFinanceReport);
        }
        return res.status(404).json({ error: 'Finance Report not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function deleteFinanceReport(req, res) {
    try {
        const { id } = req.params;
        const deleted = await FinanceReport.destroy({
            where: { id }
        });
        if (deleted) {
            return res.status(204).send();
        }
        return res.status(404).json({ error: 'Finance Report not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    createFinanceReport,
    getAllFinanceReports,
    getFinanceReportById,
    updateFinanceReport,
    deleteFinanceReport
};
