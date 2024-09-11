const express = require('express');
const {addDistrict } = require('../controllers/district.controller');
const router = express.Router();

router.post('/add', addDistrict);

module.exports = router;
