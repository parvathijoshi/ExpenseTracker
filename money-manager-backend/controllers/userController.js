const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { createUser } = require("../models/userModel");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await createUser(name, email, hashedPassword);
  res.json(user);
};

module.exports = { registerUser };
