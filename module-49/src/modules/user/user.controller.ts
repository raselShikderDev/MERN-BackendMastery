import { Request, Response } from "express";
import { userService } from "./user.service";


// Create a user
const createUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.createUser(req.body);
    console.log("In controller created user: ", result);

    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    throw new Error(`Something went wrong in createuser controller!`);
  }
};

// Get all  user
const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getAllUser();
    console.log("In controller get all user: ", result);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    throw new Error(`Something went wrong in getting all user controller!`);
  }
};

// Get all  user
const getUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getUser(Number(req.params.id));
    console.log("In controller get a user: ", result);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    throw new Error(`Something went wrong in getting a user controller!`);
  }
};

// Update user
const updateUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.updateUser(Number(req.params.id), req.body);
    console.log("In controller update a user: ", result);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    throw new Error(`Something went wrong in update a user controller!`);
  }
};

// Update user
const deleteUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.deleteUser(Number(req.params.id));
    console.log("In controller delete a user: ", result);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    throw new Error(`Something went wrong in delete a user controller!`);
  }
};



export const userController = {
  createUser,
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
};
