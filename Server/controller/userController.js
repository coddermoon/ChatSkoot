const bcrypt = require("bcrypt");
const User = require("../models/userModal");
const jwt = require("jsonwebtoken");

module.exports.register = async (req, res, next) => {
  try {
    const { name, email, password, username } = req.body;
    const userNameChack = await User.findOne({ username: username });
    console.log("user is", userNameChack);
    if (userNameChack)
      return res.status(400).send({ msg: "user already registered" });

    // email chacked
    const userEmailCheck = await User.findOne({ email: email });
    if (userEmailCheck)
      return res.sratus(400).json({ msg: "email already exist" });

    // store password in database

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      username,
      email,

      password: hashedPassword,
    });
    delete user.password;
    return res.json({ status: 200, user: user });
  } catch (err) {
    next(err);
  }
};

// login authorizaton

module.exports.login = async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          res.status(400).json({ msg: "something went wrong" });
        }
        if (result) {
          return res.json({ status: 200, user: user });
        } else {
          res.status(400).json({ msg: "password doesnt match" });
        }
      });
    } else {
      res.json({
        status: 400,
        msg: "user not found",
      });
    }
  });

  
};
