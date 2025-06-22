const express = require('express');
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Collection = require('../Models/collection_modal.js');

router.post(
    "/uploadcollection",
    [
      body("email").isEmail(),
    ],
async (req,res) => {
    const err = validationResult(req);
    if(!err.isEmpty())
    {
        return res.status(400).json({ errors: err.array()})
    }
    try{
        await Collection.create({
            email: req.body.email,
            field: req.body.field,
            tools_data : req.body.tools_data,
            keywords : req.body.keywords
        });
        res.status(200).json({ success: true})
    }
    catch(err){
        console.log(err)
        res.json({ success: false})
    }
})

module.exports = router