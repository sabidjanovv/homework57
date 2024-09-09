const express = require("express");

const router = express.Router();
const clientRouter = require("./client.routes");
const ownerRouter = require("./owner.routes");
const toolRouter = require("./tool.routes");

router.use("/client", clientRouter);
router.use("/owner", ownerRouter);
router.use("/tool", toolRouter);

module.exports = router;
