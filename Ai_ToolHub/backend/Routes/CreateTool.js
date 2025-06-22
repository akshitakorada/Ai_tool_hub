const express = require('express');
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Tool = require('../Models/tools_model.js');

router.post('/uploadtool',
[
    body("name", "name should be min 5 characters").isLength({ min: 5 }),
    body("developed_by", "name should be min 5 characters").isLength({ min: 5 }),
    body("type", "type should be min 5 characters").isLength({min: 1}),
    body("statement", "statement should not br empty").isLength({min: 1}),
    body("description", "description should not be empty").isLength({min: 1}),
],
async (req,res) => {
    const err = validationResult(req);
    if(!err.isEmpty())
    {
        return res.status(400).json({ errors: err.array()})
    }

    try{
        await Tool.create({
            name: req.body.name,
            developed_by: req.body.developed_by,
            release_date: req.body.release_date,
            type: req.body.type,
            statement: req.body.statement,
            description: req.body.description,
            image: req.body.image,
            link: req.body.link,
            yt_link: req.body.yt_link,
            likes: req.body.likes,
        });
        res.status(200).json({ success: true})
    }
    catch(err){
        console.log(err)
        res.json({ success: false})
    }
})

module.exports = router