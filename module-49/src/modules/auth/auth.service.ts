import { Prisma } from "@prisma/client";
import { prisma } from "../../config/db";

const loginWithPassword = async ({email, password}:{email:string, password:string}) => {
 const Existeduser = await prisma.user.findUnique({
    where:{
      email
    }
  });
  if (!Existeduser) {
    throw new Error("User not found");
  }
  if (Existeduser.password === password) {
    return Existeduser
  } else {
    throw new Error("Invalid password");
  }

};


const authWithGoolge = async (data:Prisma.UserCreateInput) => {
 const Existeduser = await prisma.user.findUnique({
    where:{
      email: data.email
    }
  });
  if (Existeduser) {
    throw new Error("Email already found");
  }
  return await prisma.user.create({data})

};





export const authService = {
  loginWithPassword,
  authWithGoolge
};
