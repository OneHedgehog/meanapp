const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = new Schema({
    comment_id: {
        type: String,
    },
    post_id: {
        type: String,
    },
    dislikedBy: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now

    });

module.exports = mongoose.model('Dislike', likeSchema);