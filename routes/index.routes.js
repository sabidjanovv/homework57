const { Router } = require("express");
const router = Router();

const clientRouter = require('./client.routes')
const toolRouter = require('./tool.routes')
const owner = require("./owner.routes")
const shop = require("./shop.routes")
const district = require("./district.routes")

router.use('/client', clientRouter)
router.use('/tool', toolRouter)
router.use('/owner', owner)
router.use('/shop', shop)
router.use('/district', district)


module.exports = router