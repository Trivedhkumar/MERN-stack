const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const { signOut, signUp, signIn, isSignedIn } = require("../controllers/auth");

router.get("/signout", signOut);

router.post(
  "/signup",
  [
    check("name")
      .isLength({ min: 3 })
      .withMessage("Name should be minimum of 3 letters "),
    check("email").isEmail().withMessage("enter proper email"),
    check("password")
      .isLength({ min: 5 })
      .withMessage("minimum of 5 characters"),
  ],
  signUp
);

router.post(
  "/signin",
  [
    check("email").isEmail().withMessage("email or username is required"),
    check("password").isLength({ min: 5 }).withMessage("password is required"),
  ],
  signIn
);

router.get("/testing", isSignedIn, (req, res) => {
  res.json(req.auth);
});
module.exports = router;
