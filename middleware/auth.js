const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  // Authentication logic
};

const sellerProtect = (req, res, next) => {
  // Role-based authorization for seller
};

const adminProtect = (req, res, next) => {
  // Role-based authorization for admin
};

module.exports = { protect, sellerProtect, adminProtect };
