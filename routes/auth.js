const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Import User Model Schema


const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');

let error = require('../error');

router.post('/register',
    //validation module
    [
        check('email')
            .isEmail().withMessage('must be a valid email')
            .trim()
            .normalizeEmail(),
        check('username')
            .exists().withMessage('username don\'t exist')
            .trim() //username can't be space
            .isLength({ min: 1 }).withMessage('empty username'),

        check('password')
            .exists().withMessage('password don\'t exist')
            .isLength({ min: 1 }).withMessage('empty password'),

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

        //if( md5(cuser.password + salt !== hash ))
        console.log( validPostData);

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

        });
        res.json({dbmessage: 'user saved'})

});

module.exports = router;