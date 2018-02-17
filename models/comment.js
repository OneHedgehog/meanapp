const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    post_id: {
        type: String,
    },
    authorId: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    likes: [{
        likedBy: String,
        date: Date
    }],
    dislikes: [{
        likedBy: String,
        date: Date
    }],
});


module.exports = mongoose.model('Comment', commentSchema);