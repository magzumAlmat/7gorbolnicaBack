const PublicProcurementPlan = require('../models/PublicProcurementPlan');

async function createPublicProcurementPlan(req, res) {
    try {
        const { Name, path } = req.body;
        const newPublicProcurementPlan = await PublicProcurementPlan.create({ Name, path });
        return res.status(201).json(newPublicProcurementPlan);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getAllPublicProcurementPlans(req, res) {
    try {
        const publicProcurementPlans = await PublicProcurementPlan.findAll();
        return res.status(200).json(publicProcurementPlans);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getPublicProcurementPlanById(req, res) {
    try {
        const { id } = req.params;
        const publicProcurementPlan = await PublicProcurementPlan.findByPk(id);
        if (!publicProcurementPlan) {
            return res.status(404).json({ error: 'Public Procurement Plan not found' });
        }
        return res.status(200).json(publicProcurementPlan);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function updatePublicProcurementPlan(req, res) {
    try {
        const { id } = req.params;
        const { Name, path } = req.body;
        const [updated] = await PublicProcurementPlan.update({ Name, path }, {
            where: { id }
        });
        if (updated) {
            const updatedPublicProcurementPlan = await PublicProcurementPlan.findByPk(id);
            return res.status(200).json(updatedPublicProcurementPlan);
        }
        return res.status(404).json({ error: 'Public Procurement Plan not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function deletePublicProcurementPlan(req, res) {
    try {
        const { id } = req.params;
        const deleted = await PublicProcurementPlan.destroy({
            where: { id }
        });
        if (deleted) {
            return res.status(204).send();
        }
        return res.status(404).json({ error: 'Public Procurement Plan not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    createPublicProcurementPlan,
    getAllPublicProcurementPlans,
    getPublicProcurementPlanById,
    updatePublicProcurementPlan,
    deletePublicProcurementPlan
};