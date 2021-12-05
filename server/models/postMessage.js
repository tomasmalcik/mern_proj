import mongoose from "mongoose";


const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 6,
        max: 100
    },
    message: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    tags: {
        type: [String]
    },
    selectedFile: {
        type: String
    },
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage