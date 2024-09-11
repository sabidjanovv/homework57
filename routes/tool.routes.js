const { Router } = require("express");
const { addTool, getTools, updateTool, deleteTool } = require("../controllers/tool.controller");

const router = Router();

router.post("/add",addTool)
router.get("/get",getTools)
router.put("/update/:id",updateTool)
router.delete("/delate",deleteTool)


module.exports= router  