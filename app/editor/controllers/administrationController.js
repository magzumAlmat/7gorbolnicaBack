const Administration = require('../models/Administration');

async function createAdministration(req, res) {
    try {
        if (req.file) {
            req.body.path = req.file.path;
        }
        const newAdministration = await Administration.create(req.body);
        return res.status(201).json(newAdministration);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getAllAdministration(req, res) {
    try {
        const administration = await Administration.findAll();
        return res.status(200).json(administration);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getAdministrationById(req, res) {
    try {
        const { id } = req.params;
        const administration = await Administration.findByPk(id);
        if (!administration) {
            return res.status(404).json({ error: 'Administration not found' });
        }
        return res.status(200).json(administration);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function updateAdministration(req, res) {
    try {
        const { id } = req.params;
        if (req.file) {
            req.body.path = req.file.path;
        }
        const [updated] = await Administration.update(req.body, {
            where: { id }
        });
        if (updated) {
            const updatedAdministration = await Administration.findByPk(id);
            return res.status(200).json(updatedAdministration);
        }
        return res.status(404).json({ error: 'Administration not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function deleteAdministration(req, res) {
    try {
        const { id } = req.params;
        const deleted = await Administration.destroy({
            where: { id }
        });
        if (deleted) {
            return res.status(204).send();
        }
        return res.status(404).json({ error: 'Administration not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    createAdministration,
    getAllAdministration,
    getAdministrationById,
    updateAdministration,
    deleteAdministration
};
