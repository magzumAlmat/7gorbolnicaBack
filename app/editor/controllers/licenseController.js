const License = require('../models/License');

async function createLicense(req, res) {
    try {
        const newLicense = await License.create(req.body);
        return res.status(201).json(newLicense);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getAllLicenses(req, res) {
    try {
        const licenses = await License.findAll();
        return res.status(200).json(licenses);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getLicenseById(req, res) {
    try {
        const { id } = req.params;
        const license = await License.findByPk(id);
        if (!license) {
            return res.status(404).json({ error: 'License not found' });
        }
        return res.status(200).json(license);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function updateLicense(req, res) {
    try {
        const { id } = req.params;
        const [updated] = await License.update(req.body, {
            where: { id }
        });
        if (updated) {
            const updatedLicense = await License.findByPk(id);
            return res.status(200).json(updatedLicense);
        }
        return res.status(404).json({ error: 'License not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function deleteLicense(req, res) {
    try {
        const { id } = req.params;
        const deleted = await License.destroy({
            where: { id }
        });
        if (deleted) {
            return res.status(204).send();
        }
        return res.status(404).json({ error: 'License not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    createLicense,
    getAllLicenses,
    getLicenseById,
    updateLicense,
    deleteLicense
};
