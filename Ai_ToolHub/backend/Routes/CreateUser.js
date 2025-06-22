const express = require('express');
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require('../Models/user_modal.js');

router.post(
    "/createuser",
    [
      body("name", "name should be min 5 characters").isLength({ min: 5 }),
      body("email").isEmail(),
      body("password", "password should be min 5 characters").isLength({
        min: 5,
      }),
    ],
async (req,res) => {
    const err = validationResult(req);
    if(!err.isEmpty())
    {
        return res.status(400).json({ errors: err.array()})
    }
    try{
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            location: req.body.location,
            favorites : req.body.favorites
        });
        res.status(200).json({ success: true})
    }
    catch(err){
        console.log(err)
        res.json({ success: false})
    }
})

module.exports = router