import { Post, Prisma } from "@prisma/client";
import { prisma } from "../../config/db";


const createPost = async (payload:Prisma.PostCreateInput):Promise<Post> => {
    const result = await prisma.post.create({
        data:payload,
        include:{
          author:{
            select:{
              id:true,
              name:true,
              email:true
            }
          }
        }
    })
  return result;
};


// Get all user
const getAllPost = async () => {
  const allPost = await prisma.post.findMany({
    orderBy:{
      createdAt:"asc"
    }
  })
  return allPost
};



// Update singel user  by id
const getPost = async (id:number) => {
  const post = await prisma.post.findUnique({
    where:{
      id
    }
  })
  return post
};




// Get singel user  by id
const updatePost = async (id:number, payload:Partial<Post>) => {
   const post = await prisma.post.update({
    where:{
      id
    },
    data:payload
  })
  return post
};

// Get singel user  by id
const deletePost = async (id:number) => {
const post = await prisma.post.delete({
    where:{
      id
    }
  })
  return post
};


export const postService = {
  createPost,
  getAllPost,
  getPost,
  updatePost,
  deletePost
};
