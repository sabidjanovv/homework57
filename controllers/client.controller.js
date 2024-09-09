const { errorHandler } = require("../helpers/error_handler");
const Client = require("../models/clients");

const addClient = async (req, res)=>{
    try {
        const { name, phone_number } = req.body;
        const newClient = await Client.create({ name, phone_number });
        res.status(201).send(newClient);
    } catch (error) {
        errorHandler(res, error);
    }
}

const getAllClients = async (req, res) => {
    try {
        const clients = await Client.findAll({});
        res.status(200).send({
            message:"All clients fatched successfully",
            data: clients
        });
    } catch (error) {
        errorHandler(res, error);
    }
}

const getClientByID = async (req, res) => {
    try {
        const id = req.params.id;
        const client = await Client.findByPk(id); //Id boyicha obkeladgan bose findByPk aks holda email, username yoki tel raqam bilan onkemoqchi bose findOne orqali chaqiramiz
        if(!client){
            return res.status(404).send({ 
                error: "Client not found" 
            });
        }
        res.status(200).send({
            message: "Client fetched successfully by ID",
            data: client
        });
    } catch (error) {
        errorHandler(res, error);
    }
}

const getClientByPhone =  async(req, res) => {
    try {
        const {phone} = req.body;
        const client = await Client.findOne({ where: { phone_number:phone } });
        if(!client){
            return res.status(404).send({
                error: "Client not found"
            });
        }
        res.status(200).send({
            message: "Client fetched successfully by phone number",
            data: client
        });
    } catch (error) {
        errorHandler(res, error);
    }
}

const updateClient = async (req, res) => {
    try {
        const {id} = req.params;
        const client = await Client.findByPk(id); 
        if (!client) {
          return res.status(404).send({
            error: "Client not found",
          });
        }
        const { name, phone_number, is_active } = req.body;
        client.name = name;
        client.phone_number = phone_number;
        client.is_active = is_active;
        client.save();
        res.status(200).send({
            message: "Client updated successfully",
            data: client[1][0]
        });
    } catch (error) {
        errorHandler(res, error);
    }
}

const updateClientWithPatch = async (req, res) => {
    try {
      const { id } = req.params;
      const check = await Client.findByPk(id);
      if (!check) {
        return res.status(404).send({
          error: "Client not found",
        });
      }
      const client = await Client.update( req.body, { where: { id }, returning: true });
      return res.status(200).send({
        message: "Client updated successfully",
        data: client[1][0],
      });
    } catch (error) {
      errorHandler(res, error);
    }
}

const deleteClient = async (req, res) => {
    try {
        const { id } = req.params;
        const client = await Client.findByPk(id);
        if (!client) {
            return res.status(404).send({
                error: "Client not found",
            });
        }
        await client.destroy();
        return res.status(200).send({
            message: "Client deleted successfully",
        });
    } catch (error) {
        errorHandler(res, error);
    }
 
}


module.exports = {
    addClient,
    getAllClients,
    getClientByID,
    getClientByPhone,
    updateClient,
    updateClientWithPatch,  
    deleteClient,
}