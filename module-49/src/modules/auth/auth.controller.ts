import { Request, Response } from "express";
import { authService } from "./auth.service";


// Login user by password
const loginWithPassword = async (req: Request, res: Response) => {
  try {
    const result = await authService.loginWithPassword(req.body);
    console.log("In controller created user: ", result);

    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    throw new Error(`Something went wrong in createuser controller!`);
  }
};


// Login user by Google
const authWithGoolge = async (req: Request, res: Response) => {
  try {
    const result = await authService.authWithGoolge(req.body);
    console.log("In controller created user: ", result);

    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    throw new Error(`Something went wrong in createuser controller!`);
  }
};


export const authController = {
    loginWithPassword,
    authWithGoolge
};
