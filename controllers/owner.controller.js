const Owner = require('../models/owner');

const createOwner = async (req, res) => {
    const { name, phone_number, otp_id } = req.body;

    try {
        const newOwner = await Owner.create({ name, phone_number, otp_id });
        res.status(201).json(newOwner);
    } catch (error) {
        res.status(500).json({ error: 'Server error: ' + error.message });
    }
};

const getOwners = async (req, res) => {
    try {
        const owners = await Owner.findAll();
        res.status(200).json(owners);
    } catch (error) {
        res.status(500).json({ error: 'Server error: ' + error.message });
    }
};

const getOwnerById = async (req, res) => {
    const { id } = req.params;

    try {
        const owner = await Owner.findByPk(id);
        if (!owner) {
            return res.status(404).json({ error: 'Owner not found' });
        }
        res.status(200).json(owner);
    } catch (error) {
        res.status(500).json({ error: 'Server error: ' + error.message });
    }
};

const updateOwner = async (req, res) => {
    const { id } = req.params;
    const { name, phone_number, otp_id } = req.body;

    try {
        const owner = await Owner.findByPk(id);
        if (!owner) {
            return res.status(404).json({ error: 'Owner not found' });
        }

        owner.name = name;
        owner.phone_number = phone_number;
        owner.otp_id = otp_id;

        await owner.save();
        res.status(200).json(owner);
    } catch (error) {
        res.status(500).json({ error: 'Server error: ' + error.message });
    }
};

const deleteOwner = async (req, res) => {
    const { id } = req.params;

    try {
        const owner = await Owner.findByPk(id);
        if (!owner) {
            return res.status(404).json({ error: 'Owner not found' });
        }

        await owner.destroy();
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: 'Server error: ' + error.message });
    }
};

module.exports = {
    createOwner,
    getOwners,
    getOwnerById,
    updateOwner,
    deleteOwner,
}