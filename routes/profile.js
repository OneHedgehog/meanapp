const express = require('express');
const router = express.Router();
const multer  = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/client/dist/assets/img')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

const upload = multer({ storage: storage })
const User = require('../models/user'); // Import User Model Schema


router.use( (req, res, next) => {
    const id = req.headers.authid;

    if(!id){
        res.json({
            success: false,
            mes: 'empty id'
        });
        return;
    }

    req.user_id = id;
    next();
});

router.get('/data', (req, res)=>{
    User.findOne( { _id: req.user_id }).select('username email').exec( (err,user)=>{
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

router.post('/data', upload.single('photo'), (req, res)=>{
    console.log(req);
    res.json({res: "bad req"})
});

module.exports = router;
