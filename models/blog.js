const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
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
    comments: [{
        commentId: String
    }],
});


module.exports = mongoose.model('Blog', blogSchema);