const express = require('express');
const router = express.Router();
const Blog = require('../models/blog'); // Import User Model Schema

const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');

const errObj = require('../dberror');

router.post('/create',
    [
        check('title')
            .trim() //username can't be space
            .exists().withMessage('title dones\'t exist')
            .isLength({ min: 2, max: 200 }).withMessage('invalid title length'),
        check('body')
            .trim() //username can't be space
            .exists().withMessage('body doesn\'t exist')
            .isLength({ min: 5, max: 10000 }).withMessage('invalid body length'),
        check('action_id')
            .trim()
            .exists().withMessage('action_id doesn\'t exist')   ,
        check('author_name')
            .trim()
            .exists().withMessage('unregistered')
            .isLength({ min: 2, max: 200 }).withMessage('unregistered'),
        check('author_id')
            .trim()
            .exists().withMessage('unregistered')
            .isLength({ min: 24, max: 24 }).withMessage('unregistered'),

    ],
    (req,res)=>{

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let err =  errors.mapped();
            let mes = errObj.validators(err);
            res.json({success: false, error: mes});
            return;
        }

        //valid POST data obj
        const validPostData = matchedData(req);
        //
        let blogPost = new Blog({
            authorName: validPostData.author_name,
            authorId: validPostData.author_id,
            title:validPostData.title,
            body:validPostData.body
        });

        if(validPostData.action_id = 'new'){
            blogPost.save( (err, data) => {
                if(err){
                    res.json({success: false, mes: errObj.validators(err)})
                }else{
                    res.json({success: true, blogData:data});
                }
            });
        }else{
            
        }
});


router.get('/posts', (req,res) => {
    Blog.find({}).sort([['date', -1]]).exec( (err, data) =>{
        if(err){
            res.json({success:false, mes: errObj.validators(err)})
        }else{
            res.json({success: true, posts: data});
        }
    })
});


router.get('/post/:id', (req,res)=> {
    Blog.findOne({_id: req.params.id}, (err, post) => {
        if(err){
            res.json({success:false, mes: errObj.validators(err)})
        }else{
            res.json({success: true, post: post});
        }
    })
});


router.put('/post/update/:id',
    check('title')
        .trim() //username can't be space
        .exists().withMessage('title dones\'t exist')
        .isLength({ min: 2, max: 200 }).withMessage('invalid title length'),
    check('body')
        .trim() //username can't be space
        .exists().withMessage('body doesn\'t exist')
        .isLength({ min: 5, max: 10000 }).withMessage('invalid body length'),
    (req,res)=> {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let err =  errors.mapped();
            let mes = errObj.validators(err);
            res.json({success: false, error: mes});
            return;
        }

        const validPostData = matchedData(req);

    Blog.update({_id: req.params.id}, { $set : {
            title: validPostData.title,
            body: validPostData.body
        }}, (err, post) => {
        if(err){
            res.json({success:false, mes: errObj.validators(err)})
        }else{
            res.json({success: true, post: post});
        }
    })
});


router.delete('/post/delete/:id', (req, res) => {
    Blog.remove({ _id: req.params.id }, function (err) {
        if(err){
            res.json({success:false, mes: errObj.validators(err)})
        }else{
            res.json({success: true, id: req.params.id, mes: req.params.id + 'was deleted'});
        }
    });
});


module.exports = router;