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
    }
}, { toJSON: { virtuals: true } });

blogSchema.virtual('likes', {
    ref: 'Like',
    localField: '_id',
    foreignField: 'post_id'
});

blogSchema.virtual('dislikes', {
    ref: 'Dislike',
    localField: '_id',
    foreignField: 'post_id'
});

blogSchema.post('remove', function() {
        this.model('Comment').remove( { post_id: this._id}, (err, docs)=>{
            if(err){
                console.log(err);
            }
        })
});

module.exports = mongoose.model('Blog', blogSchema);