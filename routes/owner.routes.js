const express = require("express");
const {
  addOwner,
  getOwnerByID,
  getAllOwners,
  updateOwner,
  deleteOwner,
} = require("../controllers/owner.controller");

const router = express.Router();

router.post("/", addOwner);
router.get("/", getAllOwners);
router.get("/:id", getOwnerByID);
router.put("/:id", updateOwner);
router.delete("/:id", deleteOwner);

module.exports = router;
