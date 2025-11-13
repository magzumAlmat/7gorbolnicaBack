const Vacancy = require('../models/Vacancy');

async function createVacancy(req, res) {
    try {
        const newVacancy = await Vacancy.create(req.body);
        return res.status(201).json(newVacancy);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getAllVacancies(req, res) {
    try {
        const vacancies = await Vacancy.findAll();
        return res.status(200).json(vacancies);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getVacancyById(req, res) {
    try {
        const { id } = req.params;
        const vacancy = await Vacancy.findByPk(id);
        if (!vacancy) {
            return res.status(404).json({ error: 'Vacancy not found' });
        }
        return res.status(200).json(vacancy);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function updateVacancy(req, res) {
    try {
        const { id } = req.params;
        const [updated] = await Vacancy.update(req.body, {
            where: { id }
        });
        if (updated) {
            const updatedVacancy = await Vacancy.findByPk(id);
            return res.status(200).json(updatedVacancy);
        }
        return res.status(404).json({ error: 'Vacancy not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function deleteVacancy(req, res) {
    try {
        const { id } = req.params;
        const deleted = await Vacancy.destroy({
            where: { id }
        });
        if (deleted) {
            return res.status(204).send();
        }
        return res.status(404).json({ error: 'Vacancy not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    createVacancy,
    getAllVacancies,
    getVacancyById,
    updateVacancy,
    deleteVacancy
};
