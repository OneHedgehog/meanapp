const express = require('express');
const router = express.Router();
const Blog = require('../models/blog'); // Import User Model Schema
const Comment = require('../models/comment');
const Like = require('../models/like');
const Dislike = require('../models/dislike');

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
    Blog.find({})
        .sort([['date', -1]])
        .populate('likes')
        .populate('dislikes')
        .populate('author')
        .exec( (err, data) =>{
        if(err){
            res.json({success:false, mes: errObj.validators(err)})
        }else{
            console.log(data);
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
    Blog.findOneAndRemove({ _id: req.params.id }, function (err, docs) {
        if(err){
            res.json({success:false, mes: errObj.validators(err)})
        }else{
            res.json({success: true, id: req.params.id, mes: req.params.id + 'was deleted'});

            //mongoose remove bug. Fixed hack
            docs.remove();
        }
    });
});

router.post('/post/comments/:post_id',
    check('user_name')
        .trim() //username can't be space
        .exists().withMessage('username dones\'t exist')
        .isLength({ min: 2, max: 200 }).withMessage('invalid username length'),
    check('content')
        .trim() //username can't be space
        .exists().withMessage('body doesn\'t exist')
        .isLength({ min: 5, max: 10000 }).withMessage('invalid body length'),
    check('user_id')
        .trim() //username can't be space
        .exists().withMessage('body doesn\'t exist')
        .isLength({ min: 24, max: 24 }).withMessage('unregistered'),
    (req, res)=> {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let err =  errors.mapped();
            let mes = errObj.validators(err);
            console.log(errors);
            res.json({success: false, error: mes});
            return;
        }

        const validPostData = matchedData(req);


        if(!req.params.post_id){
            res.json({success: false, mes: 'Invalid post_id'});
            return;
        }


        validPostData.post_id = req.params.post_id;

        let comment = new Comment({
            authorId: validPostData.user_id,
            post_id: validPostData.post_id,
            authorName: validPostData.user_name,
            title: validPostData.title,
            body: validPostData.content
        });


        comment.save( (err, comment) => {
            if(err){
                res.json({success:false, mes: errObj.validators(err)})
            }else{
                res.json({success: true, comment: comment});
                }
        })

});

router.get('/post/comments/:post_id', (req, res) => {

    if(!req.params.post_id){
        res.json({success:false, mes: 'db error'});
        return;
    }
    Comment
        .find( { post_id: req.params.post_id })
        .populate('likes')
        .populate('dislikes')
        .sort([['date', -1]])
        .exec((err, comments) => {
        if(err){
            res.json({success:false, mes: 'db error'});
            return;
        }

        res.json(comments);
    })
});

router.post('/post/like/:post_id',
    check('authorname')
        .trim() //username can't be space
        .exists().withMessage('username dones\'t exist'),
    (req, res)=> {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let err =  errors.mapped();
            let mes = errObj.validators(err);
            res.json({success: false, error: mes});
            return;
        }

        const validPostData = matchedData(req);
        if(!req.params.post_id){
            res.json({success: false, mes: 'Invalid post_id'});
            return;
        }
        validPostData.post_id = req.params.post_id;

        Like.findOneAndRemove({
            post_id: validPostData.post_id,
            likedBy: validPostData.authorname
        }, (err,likeData)=>{
            if(err){
                res.json({success:false, mes: 'db error'});
                return;
            }
            if(likeData === null){
                let like = new Like({
                    post_id: req.params.post_id,
                    likedBy: validPostData.authorname
                });

                like.save( (err, _like) =>{
                    if(err){
                        res.json({success:false, mes: errObj.validators(err)});
                        return;
                    }else{
                        res.json({success: true, like: _like});
                        return;
                    }
                });
            }else{
                res.json({success: true, like: null});
            }

        });
});


router.post('/post/dislike/:post_id',
    check('authorname')
        .trim() //username can't be space
        .exists().withMessage('username dones\'t exist'),
    (req, res)=> {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let err =  errors.mapped();
            let mes = errObj.validators(err);
            res.json({success: false, error: mes});
            return;
        }

        const validPostData = matchedData(req);
        if(!req.params.post_id){
            res.json({success: false, mes: 'Invalid post_id'});
            return;
        }
        validPostData.post_id = req.params.post_id;

        Dislike.findOneAndRemove({
            post_id: validPostData.post_id,
            dislikedBy: validPostData.authorname
        }, (err,dislikeData)=>{
            if(err){
                res.json({success:false, mes: 'db error'});
                return;
            }

            if(dislikeData === null){
                let dislike = new Dislike({
                    post_id: req.params.post_id,
                    dislikedBy: validPostData.authorname
                });

                dislike.save( (err, _dislike) =>{
                    if(err){
                        res.json({success:false, mes: errObj.validators(err)});
                        return;
                    }else{
                        res.json({success: true, dislike: _dislike});
                        return;
                    }
                });
            }else{
                res.json({success: true, dislike: null});
            }

        });
    });

router.post('/comment/like/:comment_id',
    check('authorname')
        .trim() //username can't be space
        .exists().withMessage('username dones\'t exist'),
    (req, res)=> {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let err =  errors.mapped();
            let mes = errObj.validators(err);
            res.json({success: false, error: mes});
            return;
        }

        const validPostData = matchedData(req);
        if(!req.params.comment_id){
            res.json({success: false, mes: 'Invalid post_id'});
            return;
        }
        validPostData.comment_id = req.params.comment_id;

        Like.findOneAndRemove({
            comment_id: validPostData.comment_id,
            likedBy: validPostData.authorname
        }, (err,likeData)=>{
            if(err){
                res.json({success:false, mes: 'db error'});
                return;
            }

            if(likeData === null){
                let like = new Like({
                    comment_id: req.params.comment_id,
                    likedBy: validPostData.authorname
                });

                like.save( (err, _like) =>{
                    if(err){
                        res.json({success:false, mes: errObj.validators(err)});
                        return;
                    }else{
                        res.json({success: true, like: _like});
                        return;
                    }
                });
            }else{
                res.json({success: true, like: null});
            }

        });
    });

router.post('/comment/dislike/:comment_id',
    check('authorname')
        .trim() //username can't be space
        .exists().withMessage('username dones\'t exist'),
    (req, res)=> {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let err =  errors.mapped();
            let mes = errObj.validators(err);
            res.json({success: false, error: mes});
            return;
        }

        const validPostData = matchedData(req);
        if(!req.params.comment_id){
            res.json({success: false, mes: 'Invalid post_id'});
            return;
        }
        validPostData.comment_id = req.params.comment_id;

        Dislike.findOneAndRemove({
            comment_id: validPostData.comment_id,
            dislikedBy: validPostData.authorname
        }, (err,dislikeData)=>{
            if(err){
                res.json({success:false, mes: 'db error'});
                return;
            }

            if(dislikeData === null){
                let dislike = new Dislike({
                    comment_id: req.params.comment_id,
                    dislikedBy: validPostData.authorname
                });

                dislike.save( (err, _dislike) =>{
                    if(err){
                        res.json({success:false, mes: errObj.validators(err)});
                        return;
                    }else{
                        res.json({success: true, dislike: _dislike});
                        return;
                    }
                });
            }else{
                res.json({success: true, dislike: null});
            }

        });
    });

router.delete('/post/comments/:id', (req, res) => {
    Comment.findOneAndRemove({ _id: req.params.id }, function (err, docs) {
        if(err){
            res.json({success:false, mes: errObj.validators(err)})
        }else{
            res.json({success: true, id: req.params.id, mes: req.params.id + 'was deleted'});

            //mongoose remove bug. Fixed hack
            docs.remove();
        }
    });
});

module.exports = router;