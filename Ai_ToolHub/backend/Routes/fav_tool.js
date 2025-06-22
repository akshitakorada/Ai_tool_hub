const express = require('express');
const router = express.Router();
const User = require('../Models/user_modal.js');

router.post('/AddFavTool',
async (req,res) => {

    let eId = await User.findOne({'email' : req.body.email})
    console.log(eId)
    if(eId === null)
    {
        return res.status(400).json({success : false})
    }
    else {
        try{
            await User.findOneAndUpdate({ email: req.body.email},
                {$push : { favorites : req.body.name}}).then(() => {
                    res.json({ success : true})
                })
        }
        catch(error){
            res.send("SYJ Server Error: ",error.message)
        }
    }
})

module.exports = router;