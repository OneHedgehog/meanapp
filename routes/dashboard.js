const express = require('express');
const router = express.Router();

const Like = require('../models/like');
const Dislike = require('../models/dislike');

router.get('/', (req, res)=> {
    Like.find( {likedBy: req.query.username})
        .sort({date: 1})
        .exec((err, data)=>{
       if(err){
           console.log(err);
           res.json({success: false, mes: 'db error'});
           return;
       }
       let likes = countDayLikes(data);
       Dislike.find( {dislikedBy: req.query.username})
           .sort({date: 1})
           .exec((err, data)=>{
               if(err){
                   console.log(err);
                   res.json({success: false, mes: 'db error'});
                   return;
               }
               let dislikes =  countDayLikes(data);
               let resData = {
                   likes: likes,
                   dislikes: dislikes
               };
               res.json({success: true, mes: resData})
           });

    });
});

module.exports = router;


function countDayLikes(data){
    let response = [];
    let prevItemDate = new Date(0);
    let likesCount = 1;
    data.forEach( item => {
        if( (item.date.setHours(0,0,0,0) === prevItemDate.setHours(0,0,0,0))){
            likesCount++;
        }else{
            response.push({
                date: item.date,
                value: likesCount
            });
            likesCount = 1;
        }

        prevItemDate = item.date;
    });
    return response;
}