const { Router } = require("express");
const { addClient, getClients, updateClient, deleteClient } = require("../controllers/client.controller");

const router = Router();

router.post("/add",addClient)
router.get('/clients', getClients);
router.put('/clients/:id', updateClient);
router.delete('/clients/:id', deleteClient);

module.exports= router  