const Shop = require('../models/shop');

const addShop = async (req, res) => {
    const { name, owner_id, phone_number, district_id, address, location } = req.body;

    try {
        const newShop = await Shop.create({ name, owner_id, phone_number, district_id, address, location });
        res.status(201).json(newShop);
    } catch (error) {
        res.status(500).json({ error: 'Server error: ' + error.message });
    }
};
const getShops = async (req, res) => {
    try {
        const shops = await Shop.findAll();
        res.status(200).json(shops);
    } catch (error) {
        res.status(500).json({ error: 'Server error: ' + error.message });
    }
};
const getShopById = async (req, res) => {
    const { id } = req.params;

    try {
        const shop = await Shop.findByPk(id);
        if (!shop) {
            return res.status(404).json({ error: 'Shop not found' });
        }
        res.status(200).json(shop);
    } catch (error) {
        res.status(500).json({ error: 'Server error: ' + error.message });
    }
};
const updateShop = async (req, res) => {
    const { id } = req.params;
    const { name, owner_id, phone_number, district_id, address, location } = req.body;

    try {
        const shop = await Shop.findByPk(id);
        if (!shop) {
            return res.status(404).json({ error: 'Shop not found' });
        }

        shop.name = name;
        shop.owner_id = owner_id;
        shop.phone_number = phone_number;
        shop.district_id = district_id;
        shop.address = address;
        shop.location = location;

        await shop.save();
        res.status(200).json(shop);
    } catch (error) {
        res.status(500).json({ error: 'Server error: ' + error.message });
    }
};

const deleteShop = async (req, res) => {
    const { id } = req.params;

    try {
        const shop = await Shop.findByPk(id);
        if (!shop) {
            return res.status(404).json({ error: 'Shop not found' });
        }

        await shop.destroy();
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: 'Server error: ' + error.message });
    }
};

module.exports = {
    addShop,
    getShops,
    getShopById,
    updateShop,
    deleteShop,
}