const Client = require("../models/clients")
const {errorHandler} = require("../helpers/error_handler")

const addClient = async (req,res) => {
    try {
        const { name, phone_number } = req.body;
        const newClient = await Client.create({ name, phone_number });
        res.status(201).send(newClient);
    } catch (error) {
        errorHandler(res,error)
    }
}

const getClients = async (req, res) => {
    try {
        const clients = await Client.findAll();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
const updateClient = async (req, res) => {
    const { id } = req.params;
    const { name, phone_number, otp_id, address } = req.body;

    try {
        const client = await Client.findByPk(id);
        if (!client) {
            return res.status(404).json({ error: 'Client not found' });
        }

        client.name = name;
        client.phone_number = phone_number;
        client.otp_id = otp_id;
        client.address = address;

        await client.save();
        res.status(200).json(client);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

const deleteClient = async (req, res) => {
    const { id } = req.params;

    try {
        const client = await Client.findByPk(id);
        if (!client) {
            return res.status(404).json({ error: 'Client not found' });
        }

        await client.destroy();
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};


module.exports = {
    addClient,
    getClients,
    updateClient,
    deleteClient,
}