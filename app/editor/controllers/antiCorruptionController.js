const AntiCorruption = require('../models/AntiCorruption');

async function createAntiCorruption(req, res) {
    try {
        const newAntiCorruption = await AntiCorruption.create(req.body);
        return res.status(201).json(newAntiCorruption);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getAllAntiCorruption(req, res) {
    try {
        const antiCorruption = await AntiCorruption.findAll();
        return res.status(200).json(antiCorruption);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getAntiCorruptionById(req, res) {
    try {
        const { id } = req.params;
        const antiCorruption = await AntiCorruption.findByPk(id);
        if (!antiCorruption) {
            return res.status(404).json({ error: 'AntiCorruption not found' });
        }
        return res.status(200).json(antiCorruption);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function updateAntiCorruption(req, res) {
    try {
        const { id } = req.params;
        const [updated] = await AntiCorruption.update(req.body, {
            where: { id }
        });
        if (updated) {
            const updatedAntiCorruption = await AntiCorruption.findByPk(id);
            return res.status(200).json(updatedAntiCorruption);
        }
        return res.status(404).json({ error: 'AntiCorruption not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function deleteAntiCorruption(req, res) {
    try {
        const { id } = req.params;
        const deleted = await AntiCorruption.destroy({
            where: { id }
        });
        if (deleted) {
            return res.status(204).send();
        }
        return res.status(404).json({ error: 'AntiCorruption not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    createAntiCorruption,
    getAllAntiCorruption,
    getAntiCorruptionById,
    updateAntiCorruption,
    deleteAntiCorruption
};
