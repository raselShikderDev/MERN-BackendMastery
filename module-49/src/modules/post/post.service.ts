import { Post, Prisma } from "@prisma/client";
import { prisma } from "../../config/db";

// create post
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

const getPostStats = async () => {
  return await prisma.$transaction(async (tx) => {
    const stats = await tx.post.aggregate({
      _count: true,
      _sum: { views: true },
      _max: { views: true },
      _min: { views: true },
      _avg: { views: true },
    });
    const totalFeaturedPost = await tx.post.count({
      where: {
        isFeatured: true,
      },
    });

    const topFeaturedPost = await tx.post.findFirst({
      where: {
        isFeatured: true,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        views: "desc",
      },
    });

    const lastweek = new Date();
    lastweek.setDate(lastweek.getDate() - 7);

    const lastMonth = new Date();
    lastMonth.setDate(lastMonth.getDate() - 30);

    const today = new Date();
    today.setDate(today.getDate() - 0);

    const todayPost = await tx.post.count({
      where: {
        createdAt: { gt: today },
      },
    });
    const lastMonthPost = await tx.post.count({
      where: {
        createdAt: { gte: lastMonth },
      },
    });
    const lastweekPost = await tx.post.count({
      where: {
        createdAt: { gt: lastweek },
      },
    });

    return {
      total: stats._count,
      minViews: stats._min.views,
      maxViews: stats._max.views,
      avgViews: stats._avg.views,
      featuredPost: {
        totalFeaturedPost,
        topFeaturedPost,
      },
      postsByDays: {
        todayPost,
        lastMonthPost,
        lastweekPost,
      },
    };
  });
};

export const postService = {
  createPost,
  getAllPost,
  getPost,
  updatePost,
  deletePost,
  getPostStats,
};
