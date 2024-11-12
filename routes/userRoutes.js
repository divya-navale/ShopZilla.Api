const express = require('express');
const { registerUser, loginUser, updatePassword, updateProfile } = require('../controllers/userController');

const router = express.Router();
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/updatePassword', updatePassword);
router.post('/updateProfile', updateProfile);
module.exports = router;
