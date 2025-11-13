const IncomeAndExpenseReport = require('../models/IncomeAndExpenseReport');

async function createIncomeAndExpenseReport(req, res) {
    try {
        const newIncomeAndExpenseReport = await IncomeAndExpenseReport.create(req.body);
        return res.status(201).json(newIncomeAndExpenseReport);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getAllIncomeAndExpenseReports(req, res) {
    try {
        const incomeAndExpenseReports = await IncomeAndExpenseReport.findAll();
        return res.status(200).json(incomeAndExpenseReports);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getIncomeAndExpenseReportById(req, res) {
    try {
        const { id } = req.params;
        const incomeAndExpenseReport = await IncomeAndExpenseReport.findByPk(id);
        if (!incomeAndExpenseReport) {
            return res.status(404).json({ error: 'Income And Expense Report not found' });
        }
        return res.status(200).json(incomeAndExpenseReport);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function updateIncomeAndExpenseReport(req, res) {
    try {
        const { id } = req.params;
        const [updated] = await IncomeAndExpenseReport.update(req.body, {
            where: { id }
        });
        if (updated) {
            const updatedIncomeAndExpenseReport = await IncomeAndExpenseReport.findByPk(id);
            return res.status(200).json(updatedIncomeAndExpenseReport);
        }
        return res.status(404).json({ error: 'Income And Expense Report not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function deleteIncomeAndExpenseReport(req, res) {
    try {
        const { id } = req.params;
        const deleted = await IncomeAndExpenseReport.destroy({
            where: { id }
        });
        if (deleted) {
            return res.status(204).send();
        }
        return res.status(404).json({ error: 'Income And Expense Report not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    createIncomeAndExpenseReport,
    getAllIncomeAndExpenseReports,
    getIncomeAndExpenseReportById,
    updateIncomeAndExpenseReport,
    deleteIncomeAndExpenseReport
};
