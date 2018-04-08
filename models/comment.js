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
    }
}, { toJSON: { virtuals: true } });

commentSchema.virtual('likes', {
    ref: 'Like',
    localField: '_id',
    foreignField: 'comment_id'
});


module.exports = mongoose.model('Comment', commentSchema);