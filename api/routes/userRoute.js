const express= require('express');

const router= express.Router();

const userController = require('../controllers/userController');

router.get('/', userController.listUsers)

router.put('/:email', userController.updatedUser);

router.post('/add', userController.addingUser);

router.get('/specific/:username', userController.getUserName);

module.exports = router;