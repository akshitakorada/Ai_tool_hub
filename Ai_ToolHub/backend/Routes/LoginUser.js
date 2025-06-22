const express = require("express");
const router = express.Router();
const User = require('../Models/user_modal')
const { body, validationResult } = require("express-validator");

router.post(
  "/loginuser",
  [
    body("email").isEmail(),
    body("password", "Password should be min 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({ errors: err.array() });
    }
    let email = req.body.email;
    let password = req.body.password;
    try {
      let userdata = await User.findOne({ email });
      if (!userdata) {
        return res.status(400).json({ errors: "Email not matched" });
      } else if (userdata.password != password) {
        return res.status(400).json({ errors: "Wrong Password" });
      } else {
        const data = {
          user: {
            id: userdata.id,
          },
        };
        res.json({ success: true, name: userdata.name });
      }
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
