const CorporateDocument = require('../models/CorporateDocument');

async function createCorporateDocument(req, res) {
    try {
        if (req.file) {
            req.body.path = req.file.path;
        }
        const { Name, path } = req.body;
        const newCorporateDocument = await CorporateDocument.create({ Name, path });
        return res.status(201).json(newCorporateDocument);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getAllCorporateDocuments(req, res) {
    try {
        const corporateDocuments = await CorporateDocument.findAll();
        return res.status(200).json(corporateDocuments);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getCorporateDocumentById(req, res) {
    try {
        const { id } = req.params;
        const corporateDocument = await CorporateDocument.findByPk(id);
        if (!corporateDocument) {
            return res.status(404).json({ error: 'Corporate Document not found' });
        }
        return res.status(200).json(corporateDocument);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function updateCorporateDocument(req, res) {
    try {
        const { id } = req.params;
        if (req.file) {
            req.body.path = req.file.path;
        }
        const { Name, path } = req.body;
        const [updated] = await CorporateDocument.update({ Name, path }, {
            where: { id }
        });
        if (updated) {
            const updatedCorporateDocument = await CorporateDocument.findByPk(id);
            return res.status(200).json(updatedCorporateDocument);
        }
        return res.status(404).json({ error: 'Corporate Document not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function deleteCorporateDocument(req, res) {
    try {
        const { id } = req.params;
        const deleted = await CorporateDocument.destroy({
            where: { id }
        });
        if (deleted) {
            return res.status(204).send();
        }
        return res.status(404).json({ error: 'Corporate Document not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    createCorporateDocument,
    getAllCorporateDocuments,
    getCorporateDocumentById,
    updateCorporateDocument,
    deleteCorporateDocument
};