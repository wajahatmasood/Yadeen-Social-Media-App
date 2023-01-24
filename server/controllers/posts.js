import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    // console.log(postMessages);
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
 // extracting ID ==> it get id by route as our route is posts/id
 const { id: _id } = req.params;
 const post = req.body;
 // checking that id is mongo's id
 if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post Found With This ID')
// Calling a model to update
const updatePost = await PostMessage.findByIdAndUpdate(_id, post, {new:true})
resizeTo.json(updatePost)

};
