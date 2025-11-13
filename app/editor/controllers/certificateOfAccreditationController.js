const CertificateOfAccreditation = require('../models/CertificateOfAccreditation');

async function createCertificateOfAccreditation(req, res) {
    try {
        const newCertificateOfAccreditation = await CertificateOfAccreditation.create(req.body);
        return res.status(201).json(newCertificateOfAccreditation);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getAllCertificateOfAccreditations(req, res) {
    try {
        const certificateOfAccreditations = await CertificateOfAccreditation.findAll();
        return res.status(200).json(certificateOfAccreditations);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getCertificateOfAccreditationById(req, res) {
    try {
        const { id } = req.params;
        const certificateOfAccreditation = await CertificateOfAccreditation.findByPk(id);
        if (!certificateOfAccreditation) {
            return res.status(404).json({ error: 'Certificate Of Accreditation not found' });
        }
        return res.status(200).json(certificateOfAccreditation);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function updateCertificateOfAccreditation(req, res) {
    try {
        const { id } = req.params;
        const [updated] = await CertificateOfAccreditation.update(req.body, {
            where: { id }
        });
        if (updated) {
            const updatedCertificateOfAccreditation = await CertificateOfAccreditation.findByPk(id);
            return res.status(200).json(updatedCertificateOfAccreditation);
        }
        return res.status(404).json({ error: 'Certificate Of Accreditation not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function deleteCertificateOfAccreditation(req, res) {
    try {
        const { id } = req.params;
        const deleted = await CertificateOfAccreditation.destroy({
            where: { id }
        });
        if (deleted) {
            return res.status(204).send();
        }
        return res.status(404).json({ error: 'Certificate Of Accreditation not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    createCertificateOfAccreditation,
    getAllCertificateOfAccreditations,
    getCertificateOfAccreditationById,
    updateCertificateOfAccreditation,
    deleteCertificateOfAccreditation
};
