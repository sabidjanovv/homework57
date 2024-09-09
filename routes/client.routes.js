const express = require("express");
const {
  addClient,
  getClientByID,
  getAllClients,
  getClientByPhone,
  updateClient,
  updateClientWithPatch,
  deleteClient,
} = require("../controllers/client.controller");

const router = express.Router();

router.post("/", addClient);
router.get("/", getAllClients);
router.get("/phone", getClientByPhone);
router.get("/:id", getClientByID);
router.put("/:id", updateClient);
router.patch("/:id", updateClientWithPatch);
router.delete("/:id", deleteClient);


module.exports = router;
