const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Import User Model Schema

const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');

const sha1 = require('sha1');

const errObj = require('../dberror');

const error = {
    error: {
        location: __dirname,
        msg: '',
    }
};

router.post('/',
    [
        check('login')
            .exists().withMessage('login don\'t exist')
            .trim() //username can't be space
            .isLength({ min: 2, max: 40 }).withMessage('invalid username length. Must be less then 40 symblos'),

        check('password')
            .exists().withMessage('password don\'t exist')
            .isLength({ min: 4, max: 40 }).withMessage('invalid password length. Must be less then 40 symblos')

    ],
    (req, res)=>{

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let err =  errors.mapped();
            error.error.msg = errObj.validators(err);
            res.json(error);
            return;
        }

        //valid POST data obj
        const validPostData = matchedData(req);

    User.findOne({
        password: sha1(validPostData.password.toLowerCase() + 'NrnLvzkzQ2n6bzNcGuLQ8GMUDTR89X2yYZ9kq5J6'),
        $or: [
            {
                username: validPostData.login.toLowerCase(),
            },
            {
                email: validPostData.login.toLowerCase(),
            }
        ]
    }, (err, user) => {
        if(err){
            error.error.msg = 'db error';
            res.json(error);
            res.end();
            return;
        }

        if(!user){
            error.error.msg = 'Invalid login or password';
            res.json(error);
            res.end();
        }else{
            res.json(user);
            res.end();
        }
    });
});

module.exports = router;
