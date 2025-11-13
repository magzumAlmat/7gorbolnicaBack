const PublicProcurementAnnouncement = require('../models/PublicProcurementAnnouncement');

async function createPublicProcurementAnnouncement(req, res) {
    try {
        const { Name, year, path } = req.body;
        const newPublicProcurementAnnouncement = await PublicProcurementAnnouncement.create({ Name, year, path });
        return res.status(201).json(newPublicProcurementAnnouncement);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getAllPublicProcurementAnnouncements(req, res) {
    try {
        const publicProcurementAnnouncements = await PublicProcurementAnnouncement.findAll();
        return res.status(200).json(publicProcurementAnnouncements);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getPublicProcurementAnnouncementById(req, res) {
    try {
        const { id } = req.params;
        const publicProcurementAnnouncement = await PublicProcurementAnnouncement.findByPk(id);
        if (!publicProcurementAnnouncement) {
            return res.status(404).json({ error: 'Public Procurement Announcement not found' });
        }
        return res.status(200).json(publicProcurementAnnouncement);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function updatePublicProcurementAnnouncement(req, res) {
    try {
        const { id } = req.params;
        const { Name, year, path } = req.body;
        const [updated] = await PublicProcurementAnnouncement.update({ Name, year, path }, {
            where: { id }
        });
        if (updated) {
            const updatedPublicProcurementAnnouncement = await PublicProcurementAnnouncement.findByPk(id);
            return res.status(200).json(updatedPublicProcurementAnnouncement);
        }
        return res.status(404).json({ error: 'Public Procurement Announcement not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function deletePublicProcurementAnnouncement(req, res) {
    try {
        const { id } = req.params;
        const deleted = await PublicProcurementAnnouncement.destroy({
            where: { id }
        });
        if (deleted) {
            return res.status(204).send();
        }
        return res.status(404).json({ error: 'Public Procurement Announcement not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    createPublicProcurementAnnouncement,
    getAllPublicProcurementAnnouncements,
    getPublicProcurementAnnouncementById,
    updatePublicProcurementAnnouncement,
    deletePublicProcurementAnnouncement
};
