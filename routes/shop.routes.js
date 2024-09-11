const express = require('express');
const { addShop, getShops, getShopById, updateShop, deleteShop } = require('../controllers/shop.controller');
const router = express.Router();

router.post('/add', addShop);           
router.get('/get', getShops);             
router.get('/shops/:id', getShopById);       
router.put('/shops/:id', updateShop);       
router.delete('/shops/:id', deleteShop);

module.exports = router;