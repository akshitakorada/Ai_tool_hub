const express = require('express');
const router = express.Router();

router.get('/fetchtools',
async (req,res) => {

    if(global.Ai_tools){
        res.status(200).send(global.Ai_tools)
    }
    else{
        res.status(400).json({error : "True"})
    }
})

router.get('/fetchcollections',
async (req,res) => {

    if(global.Ai_collections){
        res.status(200).send(global.Ai_collections)
    }
    else{
        res.status(400).json({error : "True"})
    }
}
)

module.exports = router;