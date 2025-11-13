const PublicProcurementProtocol = require('../models/PublicProcurementProtocol');

async function createPublicProcurementProtocol(req, res) {
    try {
        const { Name, year, path } = req.body;
        const newPublicProcurementProtocol = await PublicProcurementProtocol.create({ Name, year, path });
        return res.status(201).json(newPublicProcurementProtocol);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getAllPublicProcurementProtocols(req, res) {
    try {
        const publicProcurementProtocols = await PublicProcurementProtocol.findAll();
        return res.status(200).json(publicProcurementProtocols);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getPublicProcurementProtocolById(req, res) {
    try {
        const { id } = req.params;
        const publicProcurementProtocol = await PublicProcurementProtocol.findByPk(id);
        if (!publicProcurementProtocol) {
            return res.status(404).json({ error: 'Public Procurement Protocol not found' });
        }
        return res.status(200).json(publicProcurementProtocol);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function updatePublicProcurementProtocol(req, res) {
    try {
        const { id } = req.params;
        const { Name, year, path } = req.body;
        const [updated] = await PublicProcurementProtocol.update({ Name, year, path }, {
            where: { id }
        });
        if (updated) {
            const updatedPublicProcurementProtocol = await PublicProcurementProtocol.findByPk(id);
            return res.status(200).json(updatedPublicProcurementProtocol);
        }
        return res.status(404).json({ error: 'Public Procurement Protocol not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function deletePublicProcurementProtocol(req, res) {
    try {
        const { id } = req.params;
        const deleted = await PublicProcurementProtocol.destroy({
            where: { id }
        });
        if (deleted) {
            return res.status(204).send();
        }
        return res.status(404).json({ error: 'Public Procurement Protocol not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    createPublicProcurementProtocol,
    getAllPublicProcurementProtocols,
    getPublicProcurementProtocolById,
    updatePublicProcurementProtocol,
    deletePublicProcurementProtocol
};
