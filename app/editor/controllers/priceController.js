const Price = require('../models/Price');

async function createPrice(req, res) {
    try {
        if (req.file) {
            req.body.path = req.file.path;
        }
        const newPrice = await Price.create(req.body);
        return res.status(201).json(newPrice);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getAllPrices(req, res) {
    try {
        const prices = await Price.findAll();
        return res.status(200).json(prices);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getPriceById(req, res) {
    try {
        const { id } = req.params;
        const price = await Price.findByPk(id);
        if (!price) {
            return res.status(404).json({ error: 'Price not found' });
        }
        return res.status(200).json(price);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function updatePrice(req, res) {
    try {
        const { id } = req.params;
        if (req.file) {
            req.body.path = req.file.path;
        }
        const [updated] = await Price.update(req.body, {
            where: { id }
        });
        if (updated) {
            const updatedPrice = await Price.findByPk(id);
            return res.status(200).json(updatedPrice);
        }
        return res.status(404).json({ error: 'Price not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function deletePrice(req, res) {
    try {
        const { id } = req.params;
        const deleted = await Price.destroy({
            where: { id }
        });
        if (deleted) {
            return res.status(204).send();
        }
        return res.status(404).json({ error: 'Price not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    createPrice,
    getAllPrices,
    getPriceById,
    updatePrice,
    deletePrice
};
