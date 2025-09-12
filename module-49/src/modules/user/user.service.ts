import { Prisma, User } from "@prisma/client";
import { prisma } from "../../config/db";

const createUser = async (
  payload: Prisma.UserCreateInput
): Promise<User> => {
  const newUser = await prisma.user.create({
    data: payload,
  });
  return newUser;
};


// Get all user
const getAllUser = async () => {
  const allUser = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      phone: true,
      picture: true,
      status: true,
      isVerified: true,
      createdAt: true,
      updatedAt: true
    },
    orderBy:{
      createdAt:"asc"
    }
  });
  return allUser;
};



// Update singel user  by id
const getUser = async (id:number) => {
  const user = await prisma.user.findUnique({
    where:{
      id
    },
    select: {
       id: true,
      name: true,
      email: true,
      role: true,
      phone: true,
      picture: true,
      status: true,
      isVerified: true,
      createdAt: true,
      updatedAt: true
    },
  });
  return user;
};




// Get singel user  by id
const updateUser = async (id:number, payload:Partial<User>) => {
  const updatedUser = await prisma.user.update({
    where:{
      id
    },
    data:payload
  });
  return updatedUser;
};

// Get singel user  by id
const deleteUser = async (id:number) => {
  const deletedUser = await prisma.user.delete({
    where:{
      id
    }
  });
  return deletedUser;
};


export const userService = {
  createUser,
  getAllUser,
  getUser,
  updateUser,
  deleteUser
};
