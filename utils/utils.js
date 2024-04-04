const jwt = require("jsonwebtoken");
const moment = require("moment/moment");
const createdToken = async (user, expirTimeHours = 100) => {
  payload = {
    uId: user.id,
    iat: moment().unix(),
    exp: moment().add(expirTimeHours, "hours").unix(),
    claims: {
      email: user.email,
    },
  };
  const token = await new Promise((resolve, reject) => {
    jwt.sign(payload, process.env.JWT_TOKEN_KEY, (error, token) => {
      if (error) {
        reject(error);
      }
      resolve(token);
    });
  });

  return token;
};
module.exports = {
  createdToken,
};
