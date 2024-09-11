const District = require('../models/district');
const Shop = require('../models/shop');


const addDistrict = async (req, res) => {
    const { name } = req.body;

    try {
        const newDistrict = await District.create({ name });
        res.status(201).json(newDistrict);
    } catch (error) {
        res.status(500).json({ error: 'Server error: ' + error.message });
    }
};


module.exports = {
    addDistrict,
};
