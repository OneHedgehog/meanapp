const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Import User Model Schema


const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');

const errObj = require('../dberror');

const error = {
    error: {
        location: __dirname,
        msg: '',
    }
};

router.post('/register',
    //validation module
    [
        check('email')
            .isEmail().withMessage('must be a valid email')
            .trim()
            .isLength({ min: 1, max: 40 }).withMessage('invalid email length. Must be less then 200 symblos')
            .normalizeEmail(),
        check('username')
            .exists().withMessage('username don\'t exist')
            .trim() //username can't be space
            .isLength({ min: 2, max: 40 }).withMessage('invalid username length. Must be less then 40 symblos'),

        check('password')
            .exists().withMessage('password don\'t exist')
            .isLength({ min: 4, max: 40 }).withMessage('invalid password length. Must be less then 40 symblos')

    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let err =  errors.mapped();
            error.error.msg = errObj.validators(err);
            res.json(error);
            return;
        }

        //valid POST data obj
        const validPostData = matchedData(req);


        let user = new User({
            email: validPostData.email.toLowerCase(),
            username: validPostData.username.toLowerCase(),
            password: validPostData.password.toLowerCase()
        });


        user.save( (err) => {
            if(err){
                error.error.msg = errObj.dbError(err);
                res.json(error);
                res.end();
            }
            //need else, because it's async functionality
            else{
                res.json({dbmessage: 'user saved'})
            }

        });
});

router.get('/emailcheck/:email', (req, res)=>{
    User.findOne({email: req.params.email}, (err, email) => {
        if(err){
            error.error.msg = 'db error';
            res.json(error);
            res.end();
            return;
        }

        if(email){
            error.error.msg = 'email already exist';
            res.json(error);
            res.end();
        }else{
            res.json({successmes: 'email availeble'});
            res.end();
        }
    });
});

router.get('/usercheck/:user', (req, res)=>{
    User.findOne({username: req.params.user}, (err, user) => {
        if(err){
            eror.error.msg = 'db error';
            res.json(error);
            res.end();
            return;
        }

        if(user){
            error.error.msg = 'user already exist';
            res.json(error);
            res.end();
        }else{
            res.json({successmes: 'user availeble'});
            res.end();
        }
    });
});


module.exports = router;