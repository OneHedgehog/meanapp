const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Import User Model Schema


const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');

router.post('/register',
    //validation module
    [
        check('email')
            .isEmail().withMessage('must be a valid email')
            .trim()
            .isLength({ min: 1, max: 200 }).withMessage('invalid email length. Must be less then 200 symblos')
            .normalizeEmail(),
        check('username')
            .exists().withMessage('username don\'t exist')
            .trim() //username can't be space
            .isLength({ min: 1, max: 200 }).withMessage('invalid username length. Must be less then 200 symblos'),

        check('password')
            .exists().withMessage('password don\'t exist')
            .isLength({ min: 1, max: 200 }).withMessage('invalid password length. Must be less then 200 symblos'),

        //hidden input with password + salt
        check('hash')
            .exists().withMessage('empty hash')
            //.isLength({ min: 40 }),
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.mapped() });
        }

        //valid POST data obj
        const validPostData = matchedData(req);

        //TODO if( bcrypt(cuser.password + salt !== hash ))

        let user = new User({
            email: validPostData.email.toLowerCase(),
            username: validPostData.username.toLowerCase(),
            password: validPostData.password.toLowerCase()
        });


        user.save( (err) => {
            if(err){
                res.json({
                    erros: {
                        dberror:{
                            location: __dirname,
                            msg: 'db error. Can\'t save user',

                        }
                    }
                });
                res.end();
            }
            //need else, because it's async functionality
            else{
                res.json({dbmessage: 'user saved'})
            }

        });


});

module.exports = router;