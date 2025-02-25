const jwt = require("jsonwebtoken");

const encrypt = (payload, secret) => {
  return jwt.sign(payload, secret, { expiresIn: "1000" }); // Token expires in 1 hour
};

module.exports = encrypt;
