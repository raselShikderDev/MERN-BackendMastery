import { Request, Response } from "express";
import { postService } from "./post.service";


// Create a user
const createPost = async (req: Request, res: Response) => {
  try {
    const result = await postService.createPost(req.body);
    console.log("In controller created post: ", result);

    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    throw new Error(`Something went wrong in create post controller!`);
  }
};

// Get all  user
const getAllPost = async (req: Request, res: Response) => {
  try {
    const result = await postService.getAllPost();
    console.log("In controller get all posts: ", result);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    throw new Error(`Something went wrong in getting all posts controller!`);
  }
};

// Get all  user
const getPost = async (req: Request, res: Response) => {
  try {
    const result = await postService.getPost(Number(req.params.id));
    console.log("In controller get a post: ", result);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    throw new Error(`Something went wrong in getting a post controller!`);
  }
};

// Update user
const updatePost = async (req: Request, res: Response) => {
  try {
    const result = await postService.updatePost(Number(req.params.id), req.body);
    console.log("In controller update a post: ", result);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    throw new Error(`Something went wrong in update a post controller!`);
  }
};

// Update user
const deletePost = async (req: Request, res: Response) => {
  try {
    const result = await postService.deletePost(Number(req.params.id));
    console.log("In controller delete a post: ", result);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    throw new Error(`Something went wrong in delete a post controller!`);
  }
};



export const postController = {
  createPost,
  getAllPost,
  getPost,
  updatePost,
  deletePost
};
