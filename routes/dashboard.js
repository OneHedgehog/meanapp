const express = require('express');
const router = express.Router();

const Like = require('../models/like');
const Dislike = require('../models/dislike');

router.get('/', (req, res)=> {
    console.log(req.params);
    Like.find( {likedBy: req.query.username}, (err, data)=>{
        console.log(data);
    })
    res.json({name: 'fdfsd'});
});

module.exports = router;