const express = require('express');
const { manageCatalog, manageUsers, deleteUser } = require('../controllers/adminController');
const { protect, adminProtect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/manageUsers', protect, adminProtect, manageUsers);
router.get('/manageCatalog', protect, adminProtect, manageCatalog);
router.get('/deleteUser', protect, adminProtect, deleteUser);

module.exports = router;
