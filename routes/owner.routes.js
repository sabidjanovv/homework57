const express = require('express');
const { createOwner, getOwners, getOwnerById, updateOwner, deleteOwner } = require('../controllers/owner.controller');
const router = express.Router();

router.post('/add', createOwner); 
router.get('/get', getOwners);    
router.get('/owners/:id', getOwnerById); 
router.put('/owners/:id', updateOwner); 
router.delete('/owners/:id', deleteOwner); 

module.exports = router;
