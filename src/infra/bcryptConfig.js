const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashPassword = async (password) => {
  console.log("Passou");
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

const comparePasswords = async (password, hashedPassword) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};

module.exports = { hashPassword, comparePasswords };
