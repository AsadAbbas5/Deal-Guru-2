const jwt = require("jsonwebtoken");
const User = require("../models/User");

const veryfiUser = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      throw new Error("invalid request");
    }
    const token = req.headers.authorization.slice(7);
    if (!token) {
      throw new Error("invalid request");
    }
    const decryptToken = new Promise((resolve, reject) => {
      jwt.verify(
        token,
        process.env.JWT_TOKEN_KEY,
        async (error, decryptToken) => {
          if (error) {
            reject(error);
          }
          resolve(decryptToken);
        }
      );
    });
    const tokenData = await decryptToken;
    const user = await User.findById(tokenData.uId);

    if (!user) {
      throw new Error("invalid request");
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
};
module.exports = veryfiUser;
