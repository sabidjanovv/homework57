const Tool = require('../models/tool');

const addTool = async (req, res) => {
    const { name, brand, description } = req.body;

    try {
        const newTool = await Tool.create({ name, brand, description });
        res.status(201).json(newTool);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

const getTools = async (req, res) => {
    try {
        const tools = await Tool.findAll();
        res.status(200).json(tools);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

const updateTool = async (req, res) => {
    const { id } = req.params;
    const { name, brand, description } = req.body;

    try {
        const tool = await Tool.findByPk(id);
        if (!tool) {
            return res.status(404).json({ error: 'Tool not found' });
        }

        tool.name = name;
        tool.brand = brand;
        tool.description = description;

        await tool.save();
        res.status(200).json(tool);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

const deleteTool = async (req, res) => {
    const { id } = req.params;

    try {
        const tool = await Tool.findByPk(id);
        if (!tool) {
            return res.status(404).json({ error: 'Tool not found' });
        }

        await tool.destroy();
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    addTool,
    getTools,
    updateTool,
    deleteTool,
}