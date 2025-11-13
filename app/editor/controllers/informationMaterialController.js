const InformationMaterial = require('../models/InformationMaterial');

async function create(req, res) {
    try {
        const newInformationMaterial = await InformationMaterial.create(req.body);
        return res.status(201).json(newInformationMaterial);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getAll(req, res) {
    try {
        const informationMaterials = await InformationMaterial.findAll();
        return res.status(200).json(informationMaterials);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getById(req, res) {
    try {
        const { id } = req.params;
        const informationMaterial = await InformationMaterial.findByPk(id);
        if (!informationMaterial) {
            return res.status(404).json({ error: 'Information Material not found' });
        }
        return res.status(200).json(informationMaterial);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function update(req, res) {
    try {
        const { id } = req.params;
        const [updated] = await InformationMaterial.update(req.body, {
            where: { id }
        });
        if (updated) {
            const updatedInformationMaterial = await InformationMaterial.findByPk(id);
            return res.status(200).json(updatedInformationMaterial);
        }
        return res.status(404).json({ error: 'Information Material not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function remove(req, res) {
    try {
        const { id } = req.params;
        const deleted = await InformationMaterial.destroy({
            where: { id }
        });
        if (deleted) {
            return res.status(204).send();
        }
        return res.status(404).json({ error: 'Information Material not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
};