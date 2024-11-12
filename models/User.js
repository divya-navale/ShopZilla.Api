const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  userId: {type: Int16Array, required: false},
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmPassword: {type: String, required: true},
  role: { type: String, enum: ['customer', 'seller', 'admin'], default: 'customer' },
}, { timestamps: true });

userSchema.methods.updateProfile = async function (updates) {
  // update profile
};

userSchema.methods.forgotPassword = async function (newPassword) {
  // forgot password
};

userSchema.methods.registerUser = async function (userName, email, password, confirmPassword) {
  // Registration logic
};

userSchema.methods.loginUser = async function (userName, password) {
  // login logic
};

module.exports = mongoose.model('User', userSchema);
