import { Post, Prisma } from "@prisma/client";
import { prisma } from "../../config/db";

const createPost = async (payload: Prisma.PostCreateInput): Promise<Post> => {
  const result = await prisma.post.create({
    data: payload,
    include: {
      author: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });
  return result;
};

// Get all post
const getAllPost = async ({
  limit = 10,
  page = 1,
  search,
  isFeatured,
  tags,
  author,
  sortBy,
  sortOrder,
}: {
  limit?: number;
  page?: number;
  search?: string;
  isFeatured?: boolean;
  tags?: string[];
  author?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}) => {
  const where: any = {
    AND: [
      search && {
        OR: [
          { title: { contains: search, mode: "insensitive" } },
          { content: { contains: search, mode: "insensitive" } },
        ],
      },
      typeof isFeatured === "boolean" && { isFeatured },
      tags && tags.length > 0 && { tags: { hasEvery: tags } },
      author && { author },
    ].filter(Boolean),
  };
  const skip = (page - 1) * limit;
  const allPost = await prisma.post.findMany({
    include: {
      author: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
    where: where,
    take: limit,
    skip,
    orderBy: {
      [sortBy || "createdAt"]: sortOrder || "desc",
    },
  });
  const total = await prisma.post.count({ where });
  return {
    data: allPost,
    paggination: {
      page,
      limit,
      total,
      totalpages: Math.ceil(total / limit),
    },
  };
};

// Update singel post  by id
const getPost = async (id: number) => {
  return await prisma.$transaction(async (transaction) => {
    await transaction.post.update({
      where: {
        id,
      },
      data: {
        views: {
          increment: 1,
        },
      },
    });
    return await transaction.post.findUnique({
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      where: {
        id,
      },
    });
  });
};

// Update singel post  by id
const updatePost = async (id: number, payload: Partial<Post>) => {
  const post = await prisma.post.update({
    where: {
      id,
    },
    data: payload,
  });
  return post;
};

// Delete singel user  by id
const deletePost = async (id: number) => {
  const post = await prisma.post.delete({
    where: {
      id,
    },
  });
  return post;
};

export const postService = {
  createPost,
  getAllPost,
  getPost,
  updatePost,
  deletePost,
};
