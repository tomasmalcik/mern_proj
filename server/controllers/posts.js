import mongoose from "mongoose"
import PostMessage from "../models/postMessage.js"

export const getPosts = async(req, res) => {
    try {
        const postMessages = await PostMessage.find()

        res.status(200).json(postMessages)
    } catch (err) {
        res.status(404).json({
            status: 'error',
            error: err.message
        })
    }
}

export const createPost = async(req, res) => {
    try {

        const newPost = new PostMessage(req.body)
        await newPost.save()

        res.status(200).json(newPost)

    } catch (err) {

    }
}

export const updatePost = async(req, res) => {
    const { id: _id } = req.params
    const post = req.body
    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send("No post with that id")

    try {
        const updated = await PostMessage.findByIdAndUpdate(_id, post, { new: true })
        res.status(200).json({ updated })
    } catch (err) {
        res.status(400).send("Had an error")
    }
}