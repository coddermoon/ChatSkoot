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
          res.json({  msg: "something went wrong" });
        }
        if (result) {
          let token = jwt.sign({  name: user.name, id: user._id},'secret',{expiresIn:'12h'})
           res.json({ status:200, msg: "login successfull" ,token, user:user});
        } else {
          res.json({  msg: "password doesnt match" });
        }
      });
    } else {
      res.json({
       
        msg: "user not found",
      });
    }
  });

  
};

// load all user data

module.exports.users = async(req,res,next) => {
  try {
    const users = await User.find({ _id: { $ne: req.params.id } }).select([
      "email",
      "username",
      "name",
      "avatarImage",
      "_id",
    ]);
    return res.json(users);
  } catch (err) {
    next(err);
  }

}