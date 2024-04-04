const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcrypt");
const { createdToken } = require("../utils/utils");
const veryfiUser = require("../middleWares/veryfiUser");

router.use(["/profile"], veryfiUser);

router.post("/signup", async (req, res) => {
  try {
    if (!req.body.userName) throw new Error("UserName is required");
    if (!req.body.email) throw new Error("Email is required");
    if (!req.body.password) throw new Error("Password is required");

    const hashpassword = await bcrypt.hash(req.body.password, 10);

    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) throw new Error("Email is already registered");

    const data = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: hashpassword,
    });

    await data.save();

    const signupuser = await User.findOne({ email: req.body.email });

    res.status(200).json({ success: true, signupuser });
  } catch (error) {
    console.error("Error in signup:", error.message);
    res.status(400).json({ success: false, error: error.message });
  }
});

router.post("/signin", async (req, res) => {
  try {
    if (!req.body.email) throw new Error("invalid request1");
    if (!req.body.password) throw new Error("invalid requests");
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      throw new Error("Email or Password Invalid1");
    }
    const hashedPassword = user.password;
    const isMatchPassword = await bcrypt.compare(
      req.body.password,
      hashedPassword
    );
    if (!isMatchPassword) {
      throw new Error("Password or Email Invalid2");
    }
    const token = await createdToken(user, 24 * 60);

    res.status(200).send({
      user,
      token,
    });
  } catch (error) {
    console.log(error);
  }
});
router.get("/profile", (req, res) => {
  try {
    if (!req.user) {
      throw new Error("invalid requeset");
    }
    res.status(200).send({ profileLoaded: true, user: req.user });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
