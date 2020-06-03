const User = require("../models/user");
const { check, validationResult } = require("express-validator");

exports.signUp = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: err.errmsg,
        msg: "Not able to save into databse",
      });
    }
    res.json({
      name: user.name,
      email: user.email,
      id: user._id,
    });
  });
};

exports.signOut = (req, res) => {
  res.json({
    message: "User signOut",
  });
};
