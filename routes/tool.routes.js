const express = require("express");
const {
  addTool,
  getToolByID,
  getAllTools,
  updateTool,
  deleteTool,
} = require("../controllers/tool.controller");

const router = express.Router();

router.post("/", addTool);
router.get("/", getAllTools);
router.get("/:id", getToolByID);
router.put("/:id", updateTool);
router.delete("/:id", deleteTool);

module.exports = router;
