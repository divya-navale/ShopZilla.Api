const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  // Registration logic
};

const loginUser = async (req, res) => {
  // Login logic
};

const updatePassword = async (req, res) => {
  // update password logic
};

const updateProfile = async (req, res) => {
  // update profile logic
};

module.exports = { registerUser, loginUser, updatePassword, updateProfile };
