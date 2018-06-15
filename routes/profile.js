const express = require('express');
const router = express.Router();
const multer  = require('multer');

let user_id = "";

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'client/src/assets/img')
    },
    filename: function (req, file, cb) {
        if(user_id === "") return;
        let fileExt = file.originalname.split(".")[1];
        cb(null, `avatar-for-${user_id}.${fileExt}`)
        User.findOneAndUpdate({_id: user_id},  { $set: { imagePath: `/assets/img/avatar-for-${user_id}.${fileExt}` }}, (err, data)=>{
            if(err) console.log(err);
        });
    }
});

const upload = multer({ storage: storage });
const User = require('../models/user'); // Import User Model Schema



router.get('/data', (req, res)=>{
    User.findOne( { _id: req.user_id }).select('username email imagePath').exec( (err,user)=>{
        if(err){
            res.json({
                success: false,
                mes: 'db error'
            });
            return;
        }

        if(!user){
            res.json({
                success: false,
                mes: 'Invalid user'
            });
        }else{
            res.json({
                success: true,
                user: user
            });
        }

    } )
});

router.post('/data', (req, res)=>{
    let _upload =  upload.single('photo');
    user_id = req.user_id;
    _upload(req, res, function (err) {
        if (err) {
            res.json({success: false, mes: "Ooop, something gonna wrong. Please, contact to support"});
            return
        }

    });
    res.json({success: true, mes: 'uploaded'});
});

module.exports = router;
